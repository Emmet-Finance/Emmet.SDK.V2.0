import { sepolia as viemSepolia } from 'viem/chains';
import { TEmmetChain } from '../types';

export const sepolia = {
  ...viemSepolia,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.org'],
    },
  },
  testnet: true,
} as TEmmetChain;