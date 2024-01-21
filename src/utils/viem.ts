
import { TChainName } from '../types';
import { findChain, getChainData } from './chains';
import { 
    createPublicClient, 
    createWalletClient, 
    custom, 
    http, 
    publicActions  
} from 'viem';

const options = {
    retryCount: 100,
    retryDelay: 3000,
    timeout: 100_000
};

export default function getBrowserExtentionSigner(chainName: TChainName){

    const chain = findChain(chainName);

    const signer = createWalletClient({
        chain,
        transport: custom((window as any).ethereum)
    })
    .extend(publicActions); // Can act as a read only provider

    return signer;

}

export function getProvider(chainName: TChainName) {

    const chain = findChain(chainName);

    const rpcURL: string = getChainData(chainName, "url") as string;

    const provider = createPublicClient({
        chain,
        transport: http(rpcURL, (options))
    });

    return provider;

}

