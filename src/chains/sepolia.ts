import { sepolia as viemSepolia } from 'viem/chains';
import { TEmmetChain } from '../types';

export const sepolia = {
  ...viemSepolia,
  emmetBridge: {
    address: "0xef5265B0B8F6c58c4194F822fb9215ca980a85BE",
    blockCreated: 5152565
  },
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.org'],
    },
  },
  testnet: true,
} as TEmmetChain;