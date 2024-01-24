import {polygonMumbai as viemPolygonMumbai} from 'viem/chains';
import { TEmmetChain } from '../types';

export const polygonMumbai = {
    ...viemPolygonMumbai,
    emmetBridge: {
        address: "",
        blockCreated: 0
    },
    name: 'Polygon Mumbai',
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/polygon_mumbai'],
        },
    },
    testnet: true,
} as TEmmetChain;