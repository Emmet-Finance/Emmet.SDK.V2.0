"use strict";
/**
 * Circle contracts: https://developers.circle.com/stablecoins/docs/evm-smart-contracts
 * Circle USDC: EVM & Non-EVM: https://www.circle.com/en/multichain-usdc
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleDestDomainsIdToChainName = exports.CircleDestDomainsChainNameToId = exports.CircleEnvironments = exports.BridgeFeeStructure = exports.TOKEN_CHAIN_CONTRACT = exports.ChainToTransmitterContract = exports.ChainToMessengerAddress = void 0;
exports.ChainToMessengerAddress = {
    // Method: Deposit For Burn 0x6fd3504e
    // Mainnets:
    arbitrum: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
    avalanche: '0x6B25532e1060CE10cc3B0A99e5683b91BFDe6982',
    base: '0x1682Ae6375C4E4A97e4B583BC394c861A46D8962',
    ethereum: '0xBd3fa81B58Ba92a82136038B25aDec7066af3155',
    optimism: '0x2B4069517957735bE00ceE0fadAE88a26365528f',
    polygon: '0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE',
    // Testnets:
    arbitrumSepolia: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
    avalancheFuji: '0xeb08f243E5d3FCFF26A9E38Ae5520A669f4019d0',
    baseSepolia: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
    optimismSepolia: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
    sepolia: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
    polygonMumbai: '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5',
};
exports.ChainToTransmitterContract = {
    // Method: Receive message 0x57ecfd28
    // Mainnets:
    arbitrum: '0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca',
    avalanche: '0x8186359aF5F57FbB40c6b14A588d2A59C0C29880',
    base: '0xAD09780d193884d503182aD4588450C416D6F9D4',
    ethereum: '0x0a992d191DEeC32aFe36203Ad87D7d289a738F81',
    optimism: '0x4D41f22c5a0e5c74090899E5a8Fb597a8842b3e8',
    polygon: '0xF3be9355363857F3e001be68856A2f96b4C39Ba9',
    // Testnets:
    arbitrumSepolia: '0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872',
    avalancheFuji: '0xa9fB1b3009DCb79E2fe346c16a604B8Fa8aE0a79',
    baseSepolia: '0x7865fAfC2db2093669d92c0F33AeEF291086BEFD',
    optimismSepolia: '0x7865fAfC2db2093669d92c0F33AeEF291086BEFD',
    sepolia: '0x7865fAfC2db2093669d92c0F33AeEF291086BEFD',
    polygonMumbai: '0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73',
};
exports.TOKEN_CHAIN_CONTRACT = {
    EURC: {
        // Mainnets:
        avalanche: '0xc891eb4cbdeff6e073e859e987815ed1505c2acd',
        ethereum: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
        // Testnets:
        sepolia: '0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4',
    },
    USDC: {
        // Mainnets:
        arbitrum: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        avalanche: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        ethereum: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        optimistm: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
        polygon: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
        // Testnets:
        arbitrumSepolia: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',
        avalancheFuji: '0x5425890298aed601595a70AB815c96711a31Bc65',
        baseSepolia: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
        optimismSepolia: '0x5fd84259d66Cd46123540766Be93DFE6D43130D7',
        sepolia: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
        polygonMumbai: '0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97',
    }
};
exports.BridgeFeeStructure = {
    stablecoins: {
        percentage: 0.0002,
        minimum: 0.4
    }
};
var CircleEnvironments;
(function (CircleEnvironments) {
    CircleEnvironments["production"] = "https://api.circle.com";
    CircleEnvironments["sandbox"] = "https://api-sandbox.circle.com";
})(CircleEnvironments || (exports.CircleEnvironments = CircleEnvironments = {}));
exports.CircleDestDomainsChainNameToId = {
    arbitrum: 3,
    arbitrumSepolia: 3,
    avalanche: 1,
    avalancheFuji: 1,
    base: 6,
    baseSepolia: 6,
    ethereum: 0,
    sepolia: 0,
    optimism: 2,
    optimismSepolia: 2,
    polygon: 7,
    polygonMumbai: 7,
};
exports.CircleDestDomainsIdToChainName = {
    mainnet: {
        0: 'ethereum',
        1: 'avalanche',
        2: 'optimism',
        3: 'arbitrum',
        6: 'base',
        7: 'polygon',
    },
    testnet: {
        0: 'sepolia',
        1: 'avalancheFuji',
        2: 'optimismSepolia',
        3: 'arbitrumSepolia',
        6: 'baseSepolia',
        7: 'polygonMumbai',
    }
};
