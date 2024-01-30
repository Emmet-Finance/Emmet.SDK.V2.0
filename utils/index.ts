import { SUPPORTED_CHAINS } from '../chains';
import { 
    TCircleClaimFeeChainName, 
    TChainName, 
    destCircleClaimFee, 
    originCircleBurnFee, 
    txBackend
} from '../types';

export * from './address';
export * from './chains';
export * from './viem';

// Constants
export const stablecoinMinimumFee = 400_000;
export const stablecoinFee = 200;
export const protocolFeeDivisor = 40;

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

// ====================  T I M E  ====================

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));