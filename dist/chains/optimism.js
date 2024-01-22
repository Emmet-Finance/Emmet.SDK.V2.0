"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimism = void 0;
const chains_1 = require("viem/chains");
const sourceId = 1; // Ethereum
exports.optimism = Object.assign(Object.assign({}, chains_1.optimism), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: 'Optimism', rpcUrls: {
        default: {
            http: ['https://mainnet.optimism.io'],
        },
    } });
