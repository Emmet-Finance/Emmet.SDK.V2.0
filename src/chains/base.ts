import {base as viemBase} from 'viem/chains';
import { TEmmetChain } from '../types';

export const base = {
  ...viemBase,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.base.org'],
    },
  },
} as TEmmetChain;