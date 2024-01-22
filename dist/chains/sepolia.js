"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sepolia = void 0;
const chains_1 = require("viem/chains");
exports.sepolia = Object.assign(Object.assign({}, chains_1.sepolia), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: 'Sepolia', nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 }, rpcUrls: {
        default: {
            http: ['https://rpc.sepolia.org'],
        },
    }, testnet: true });
