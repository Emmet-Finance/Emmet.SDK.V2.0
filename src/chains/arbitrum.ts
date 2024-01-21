import {arbitrum as viemArbitrum } from 'viem/chains'
import { TEmmetChain } from '../types';

export const arbitrum = {
  ...viemArbitrum,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: "Arbitrum",
  rpcUrls: {
    default: {
      http: ['https://arb1.arbitrum.io/rpc'],
    },
  },
} as TEmmetChain;