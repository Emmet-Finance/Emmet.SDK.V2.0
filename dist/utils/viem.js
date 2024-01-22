"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = exports.getPrivateKeySigner = void 0;
const chains_1 = require("./chains");
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const options = {
    retryCount: 100,
    retryDelay: 3000,
    timeout: 100000
};
/**
 * Creates a browser wallet signer (UI only)
 * @param chainName the lowercased name of the targetted chain
 * @returns a viem WalletClient with read & write access
 */
function getBrowserExtentionSigner(chainName) {
    const chain = (0, chains_1.findChain)(chainName);
    return (0, viem_1.createWalletClient)({
        chain,
        transport: (0, viem_1.custom)(window.ethereum)
    })
        .extend(viem_1.publicActions); // Can act as a read only provider
}
exports.default = getBrowserExtentionSigner;
/**
 * Creates a private key signer (Backend only)
 * @param chainName the lowercased name of the targetted chain
 * @param SK the account's private key
 * @param infuraApiKey (optional) infura API key
 * @returns a viem WalletClient with read & write access
 */
function getPrivateKeySigner(chainName, SK, infuraApiKey) {
    const chain = (0, chains_1.findChain)(chainName);
    const account = (0, accounts_1.privateKeyToAccount)(`0x${SK.replace('0x', '')}`);
    const rpcURL = (0, chains_1.getChainRPC)(chainName, infuraApiKey);
    return (0, viem_1.createWalletClient)({
        account,
        chain,
        transport: (0, viem_1.http)(rpcURL, (options))
    })
        .extend(viem_1.publicActions); // Can act as a read only provider
}
exports.getPrivateKeySigner = getPrivateKeySigner;
/**
 * Creates a chain reader
 * @param chainName the lowercased name of the targetted chain
 * @param infuraApiKey (optional) infura API key
 * @returns a viem Public Client with read only access
 */
function getProvider(chainName, infuraApiKey) {
    const chain = (0, chains_1.findChain)(chainName);
    const rpcURL = (0, chains_1.getChainRPC)(chainName, infuraApiKey);
    return (0, viem_1.createPublicClient)({
        chain,
        transport: (0, viem_1.http)(rpcURL, (options))
    });
}
exports.getProvider = getProvider;
