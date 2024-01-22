"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethereum = void 0;
const chains_1 = require("viem/chains");
exports.ethereum = Object.assign(Object.assign({}, chains_1.mainnet), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Ethereum", rpcUrls: {
        default: {
            http: ['https://cloudflare-eth.com'],
        },
    }, testnet: false });
