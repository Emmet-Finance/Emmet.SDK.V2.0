
import { TChainName } from '../types';
import { findChain, getChainData } from './chains';
import {
    createPublicClient,
    createWalletClient,
    custom,
    http,
    publicActions
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts'

const options = {
    retryCount: 100,
    retryDelay: 3000,
    timeout: 100_000
};

/**
 * Creates a browser wallet signer (UI only)
 * @param chainName the lowercased name of the targetted chain
 * @returns a viem WalletClient with read & write access
 */
export default function getBrowserExtentionSigner(chainName: TChainName) {

    const chain = findChain(chainName);

    return createWalletClient({
        chain,
        transport: custom((window as any).ethereum)
    })
        .extend(publicActions); // Can act as a read only provider

}

/**
 * Creates a private key signer (Backend only)
 * @param chainName the lowercased name of the targetted chain
 * @param SK the account's private key
 * @returns a viem WalletClient with read & write access
 */
export function getPrivateKeySigner(chainName: TChainName, SK: string) {

    const chain = findChain(chainName);

    const account = privateKeyToAccount(`0x${SK.replace('0x', '')}`);

    const rpcURL: string = getChainData(chainName, "url") as string;

    return createWalletClient({
        account,
        chain,
        transport: http(rpcURL, (options))
    })
        .extend(publicActions); // Can act as a read only provider

}

/**
 * Creates a chain reader
 * @param chainName the lowercased name of the targetted chain
 * @returns a viem Public Client with read only access
 */
export function getProvider(chainName: TChainName) {

    const chain = findChain(chainName);

    const rpcURL: string = getChainData(chainName, "url") as string;

    return createPublicClient({
        chain,
        transport: http(rpcURL, (options))
    });

}

