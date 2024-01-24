export * from './address';
export * from './viem';

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