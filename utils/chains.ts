import { TChainDataParam, TChainName, TEmmetChain } from "../types";
import { SUPPORTED_CHAINS, SUPPORTED_CHAIN_IDS, infuraEndpoints } from "../chains";

export function getChainById(chainId: number): TEmmetChain | undefined {
    if(isSupportedChainId(chainId)){
        for(const chainName of Object.keys(SUPPORTED_CHAINS)){
            if(SUPPORTED_CHAINS[chainName as TChainName].id == chainId){
                return SUPPORTED_CHAINS[chainName as TChainName];
            }
        }
    }
    return undefined;
}

export function getChainData(
    chinName: TChainName,
    param: TChainDataParam
): string | number | undefined {
    const chain = findChain(chinName);
    if (chain) {
        switch (param) {
            case "bridge":
                return chain.emmetBridge.address!;
            case "name":
                return chain.name;
            case "id":
                return chain.id;
            case "url":
                return chain.rpcUrls.default.http[0];
            default:
                return undefined;
        }
    }
    return undefined;
}

export function getChainRPC(chainName: TChainName, infuraApiKey?: string): string {

    const RPC = infuraEndpoints[chainName];

    if (RPC && infuraApiKey) { return `${RPC}${infuraApiKey}` }

    return getChainData(chainName, "url") as string;
}

export function findChain(chainName: TChainName): TEmmetChain | undefined {
    if (isSupportedChain(chainName)) {
        return SUPPORTED_CHAINS[chainName];
    }
    return undefined;
}

export function isMainnet(chainName: TChainName): boolean {
    return isSupportedChain(chainName) &&
        (SUPPORTED_CHAINS[chainName].testnet == false);
}

export function isSupportedChain(chainName: TChainName): boolean {
    return Object.keys(SUPPORTED_CHAINS).indexOf(chainName) > -1;
}

export function isSupportedChainId(chainId: number): boolean {
    return SUPPORTED_CHAIN_IDS.indexOf(chainId ) > -1;
}

export function isTestnet(chainName: TChainName): boolean {
    return isSupportedChain(chainName) &&
        SUPPORTED_CHAINS[chainName].testnet as boolean;
}
