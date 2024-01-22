"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleAPI = exports.infuraEndpoints = exports.SUPPORTED_CHAIN_IDS = exports.SUPPORTED_CHAINS = exports.TESTNETS = exports.MAINNETS = void 0;
const arbitrum_1 = require("./arbitrum");
const arbitrumSepolia_1 = require("./arbitrumSepolia");
const avalanche_1 = require("./avalanche");
const avalancheFuji_1 = require("./avalancheFuji");
const base_1 = require("./base");
const baseSepolia_1 = require("./baseSepolia");
const ethereum_1 = require("./ethereum");
const optimism_1 = require("./optimism");
const optimismSepolia_1 = require("./optimismSepolia");
const polygon_1 = require("./polygon");
const polygonMumbai_1 = require("./polygonMumbai");
const sepolia_1 = require("./sepolia");
// MAINNETS:
__exportStar(require("./arbitrum"), exports);
__exportStar(require("./avalanche"), exports);
__exportStar(require("./base"), exports);
__exportStar(require("./ethereum"), exports);
__exportStar(require("./optimism"), exports);
__exportStar(require("./polygon"), exports);
// TESTNETS:
__exportStar(require("./arbitrumSepolia"), exports);
__exportStar(require("./avalancheFuji"), exports);
__exportStar(require("./baseSepolia"), exports);
__exportStar(require("./optimismSepolia"), exports);
__exportStar(require("./polygonMumbai"), exports);
__exportStar(require("./sepolia"), exports);
exports.MAINNETS = {
    arbitrum: arbitrum_1.arbitrum,
    avalanche: avalanche_1.avalanche,
    base: base_1.base,
    ethereum: ethereum_1.ethereum,
    optimism: optimism_1.optimism,
    polygon: polygon_1.polygon
};
exports.TESTNETS = {
    arbitrumSepolia: arbitrumSepolia_1.arbitrumSepolia,
    avalancheFuji: avalancheFuji_1.avalancheFuji,
    baseSepolia: baseSepolia_1.baseSepolia,
    optimismSepolia: optimismSepolia_1.optimismSepolia,
    polygonMumbai: polygonMumbai_1.polygonMumbai,
    sepolia: sepolia_1.sepolia
};
exports.SUPPORTED_CHAINS = Object.assign(Object.assign({}, exports.MAINNETS), exports.TESTNETS);
exports.SUPPORTED_CHAIN_IDS = Object.keys(exports.SUPPORTED_CHAINS)
    .map(chainName => exports.SUPPORTED_CHAINS[chainName].id);
exports.infuraEndpoints = {
    // Mainnets:
    arbitrum: "https://arbitrum-mainnet.infura.io/v3/",
    avalanche: "https://avalanche-mainnet.infura.io/v3/",
    base: "",
    ethereum: "https://mainnet.infura.io/v3/",
    optimism: "https://optimism-mainnet.infura.io/v3/",
    polygon: "https://polygon-mainnet.infura.io/v3/",
    // Testnets:
    arbitrumSepolia: "https://arbitrum-sepolia.infura.io/v3/",
    avalancheFuji: "https://avalanche-fuji.infura.io/v3/",
    baseSepolia: "",
    optimismSepolia: "https://optimism-sepolia.infura.io/v3/",
    polygonMumbai: "https://polygon-mumbai.infura.io/v3/",
    sepolia: "https://sepolia.infura.io/v3/",
};
exports.CircleAPI = {
    mainnet: "https://iris-api.circle.com",
    testnet: 'https://iris-api-sandbox.circle.com'
};
