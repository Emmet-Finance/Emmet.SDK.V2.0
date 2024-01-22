"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTestnet = exports.isSupportedChainId = exports.isSupportedChain = exports.isMainnet = exports.findChain = exports.getChainRPC = exports.getChainData = exports.getChainById = void 0;
const chains_1 = require("../chains");
function getChainById(chainId) {
    if (isSupportedChainId(chainId)) {
        for (const chainName of Object.keys(chains_1.SUPPORTED_CHAINS)) {
            if (chains_1.SUPPORTED_CHAINS[chainName].id == chainId) {
                return chains_1.SUPPORTED_CHAINS[chainName];
            }
        }
    }
    return undefined;
}
exports.getChainById = getChainById;
function getChainData(chinName, param) {
    const chain = findChain(chinName);
    if (chain) {
        switch (param) {
            case "bridge":
                return chain.emmetBridge.address;
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
exports.getChainData = getChainData;
function getChainRPC(chainName, infuraApiKey) {
    const RPC = chains_1.infuraEndpoints[chainName];
    if (RPC && infuraApiKey) {
        return `${RPC}${infuraApiKey}`;
    }
    return getChainData(chainName, "url");
}
exports.getChainRPC = getChainRPC;
function findChain(chainName) {
    if (isSupportedChain(chainName)) {
        return chains_1.SUPPORTED_CHAINS[chainName];
    }
    return undefined;
}
exports.findChain = findChain;
function isMainnet(chainName) {
    return isSupportedChain(chainName) &&
        (chains_1.SUPPORTED_CHAINS[chainName].testnet == false);
}
exports.isMainnet = isMainnet;
function isSupportedChain(chainName) {
    return Object.keys(chains_1.SUPPORTED_CHAINS).indexOf(chainName) > -1;
}
exports.isSupportedChain = isSupportedChain;
function isSupportedChainId(chainId) {
    return chains_1.SUPPORTED_CHAIN_IDS.indexOf(chainId) > -1;
}
exports.isSupportedChainId = isSupportedChainId;
function isTestnet(chainName) {
    return isSupportedChain(chainName) &&
        chains_1.SUPPORTED_CHAINS[chainName].testnet;
}
exports.isTestnet = isTestnet;
