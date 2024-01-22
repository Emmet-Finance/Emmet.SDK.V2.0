"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalancheFuji = void 0;
const chains_1 = require("viem/chains");
exports.avalancheFuji = Object.assign(Object.assign({}, chains_1.avalancheFuji), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Avalanche Fuji", rpcUrls: {
        default: { http: ['https://api.avax-test.network/ext/bc/C/rpc'] },
    }, testnet: true });
