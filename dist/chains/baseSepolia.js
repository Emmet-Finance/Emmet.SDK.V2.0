"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSepolia = void 0;
const chains_1 = require("viem/chains");
exports.baseSepolia = Object.assign(Object.assign({}, chains_1.baseSepolia), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Base Sepolia", rpcUrls: {
        default: {
            http: ['https://sepolia.base.org'],
        },
    }, testnet: true });
