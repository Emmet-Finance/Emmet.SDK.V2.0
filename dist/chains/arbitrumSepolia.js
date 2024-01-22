"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitrumSepolia = void 0;
const chains_1 = require("viem/chains");
exports.arbitrumSepolia = Object.assign(Object.assign({}, chains_1.arbitrumSepolia), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Arbitrum Sepolia", rpcUrls: {
        default: {
            http: ['https://sepolia-rollup.arbitrum.io/rpc'],
        },
    }, testnet: true });
