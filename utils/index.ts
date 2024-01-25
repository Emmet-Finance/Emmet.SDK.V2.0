export * from './address';
export * from './viem';

// Constants
export const stablecoinMinimumFee = 400_000;
export const stablecoinFee = 200;

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
 * Calculates the bridge fee
 * @param amount the amount to be transferred
 * @param decimals token decials
 * @returns the fee to be deduced from the token
 */
export function calculateBridgeFee(amount: number, decimals: number) {

    stablecoinMinimumFee * (decimals / 1e6);

    const percentage = amount * stablecoinFee / decimals;

    return percentage > stablecoinMinimumFee ? percentage : stablecoinMinimumFee;

}