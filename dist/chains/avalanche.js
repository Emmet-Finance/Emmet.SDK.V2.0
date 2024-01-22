"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalanche = void 0;
const chains_1 = require("viem/chains");
exports.avalanche = Object.assign(Object.assign({}, chains_1.avalanche), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Avalanche", rpcUrls: {
        default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    }, testnet: false });
