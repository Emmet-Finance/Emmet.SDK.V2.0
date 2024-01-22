"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitrum = void 0;
const chains_1 = require("viem/chains");
exports.arbitrum = Object.assign(Object.assign({}, chains_1.arbitrum), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: "Arbitrum", rpcUrls: {
        default: {
            http: ['https://arb1.arbitrum.io/rpc'],
        },
    } });
