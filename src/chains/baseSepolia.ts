import {baseSepolia as viemBaseSepolia} from 'viem/chains';
import { TEmmetChain } from '../types';

export const baseSepolia = {
  ...viemBaseSepolia,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: "Base Sepolia",
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://sepolia.base.org'],
    },
  },
  testnet: true,
} as TEmmetChain;