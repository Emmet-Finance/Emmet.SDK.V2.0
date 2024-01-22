"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimismSepolia = void 0;
const chains_1 = require("viem/chains");
exports.optimismSepolia = Object.assign(Object.assign({}, chains_1.optimismSepolia), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: 'Optimism Sepolia', rpcUrls: {
        default: {
            http: ['https://sepolia.optimism.io'],
        },
    }, testnet: true });
