import {arbitrumSepolia as viemArbitrumSepolia } from 'viem/chains'
import { TEmmetChain } from '../types';

export const arbitrumSepolia = {
  ...viemArbitrumSepolia,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: "Arbitrum Sepolia",
  rpcUrls: {
    default: {
      http: ['https://sepolia-rollup.arbitrum.io/rpc'],
    },
  },
  testnet: true,
} as TEmmetChain;