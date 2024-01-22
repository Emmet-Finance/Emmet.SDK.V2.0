"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
const chains_1 = require("viem/chains");
exports.base = Object.assign(Object.assign({}, chains_1.base), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, rpcUrls: {
        default: {
            http: ['https://mainnet.base.org'],
        },
    } });
