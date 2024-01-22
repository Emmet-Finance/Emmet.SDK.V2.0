"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygon = void 0;
const chains_1 = require("viem/chains");
exports.polygon = Object.assign(Object.assign({}, chains_1.polygon), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: 'Polygon', rpcUrls: {
        default: {
            http: ['https://polygon-rpc.com'],
        },
    }, testnet: false });
