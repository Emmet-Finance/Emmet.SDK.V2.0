import {avalancheFuji as viemavAlancheFuji} from 'viem/chains';
import { TEmmetChain } from '../types';

export const avalancheFuji = {
  ...viemavAlancheFuji,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: "Avalanche Fuji",
  rpcUrls: {
    default: { http: ['https://api.avax-test.network/ext/bc/C/rpc'] },
  },
  testnet: true,
} as TEmmetChain;