import {optimismSepolia as viemOptimismSepolia} from 'viem/chains';
import { TEmmetChain } from '../types';

export const optimismSepolia = {
  ...viemOptimismSepolia,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: 'Optimism Sepolia',
  rpcUrls: {
    default: {
      http: ['https://sepolia.optimism.io'],
    },
  },
  testnet: true,
} as TEmmetChain;