"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygonMumbai = void 0;
const chains_1 = require("viem/chains");
exports.polygonMumbai = Object.assign(Object.assign({}, chains_1.polygonMumbai), { emmetBridge: {
        address: "",
        blockCreated: 0
    }, name: 'Polygon Mumbai', rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/polygon_mumbai'],
        },
    }, testnet: true });
