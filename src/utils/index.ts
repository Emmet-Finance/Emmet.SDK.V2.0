import { SUPPORTED_CHAINS } from '../chains';
import { TCircleClaimFeeChainName, TChainName, TEmmetChain } from '../types';
import { destCircleClaimFee, originCircleBurnFee, txBackend } from '../types';

export * from './address';
export * from './viem';

// Constants
export const stablecoinMinimumFee = 400_000;
export const stablecoinFee = 200;
export const protocolFeeDivisor = 40;

/**
 * Fetches an ENV variable
 * @param key the environment key
 * @returns the value if exists
 */
export function getEnvKeyOrThrow(key: string): string {
    try {
        require('dotenv').config();
        const value = process.env[key];
        if (value) return value;
        
    } catch (error:{message:string}|any) {
        throw new Error(`emmet-sdk-v2 getEnvKeyOrThrow Error: ${error.message}`);
    }
    throw new Error(`${key} is missing in the .env.`);
}

/**
 * Calculates the stablecoin-related (protocol) fee
 * @param amount the amount to be transferred
 * @param decimals token decials
 * @returns the fee to be deduced from the token
 */
export function calculateCoinFee(amount: number, decimals: number) {

    stablecoinMinimumFee * (decimals / 1e6);

    const percentage = amount * stablecoinFee / decimals;

    return percentage > stablecoinMinimumFee ? percentage : stablecoinMinimumFee;

}

export async function calculateMessageValue(
    originalChainName: TChainName,
    destinationChainName: TCircleClaimFeeChainName
): Promise<number> {
    
    const fromChainCoin: string = SUPPORTED_CHAINS[originalChainName].nativeCurrency.symbol;
    const toChainCoin: string = SUPPORTED_CHAINS[destinationChainName as TChainName].nativeCurrency.symbol;
    const destinationFee = destCircleClaimFee[destinationChainName];

    const result = await fetch(`${txBackend}coins?fromCoinName=${fromChainCoin}&toCoinName=${toChainCoin}`);
    const {ok, fromCoinPrice, toCoinPrice} = await result.json();

    if(ok){
        const destFeeReimburement = destinationFee * toCoinPrice / fromCoinPrice;
        const nativeTransactionFee = originCircleBurnFee[originalChainName as TCircleClaimFeeChainName];
        const protocolFee = (destFeeReimburement + nativeTransactionFee) / protocolFeeDivisor;
        return destFeeReimburement + protocolFee;
    } else {
        return 0;
    }
}