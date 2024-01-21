import { mainnet } from 'viem/chains';
import { TEmmetChain } from '../types';

export const ethereum = {
  ...mainnet,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: "Ethereum",
  rpcUrls: {
    default: {
      http: ['https://cloudflare-eth.com'],
    },
  },
  testnet: false
} as TEmmetChain;