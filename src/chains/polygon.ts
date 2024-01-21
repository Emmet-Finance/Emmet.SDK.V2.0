import { TEmmetChain } from '../types';

export const polygon = {
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
    id: 137,
    name: 'Polygon',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://polygon-rpc.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'PolygonScan',
        url: 'https://polygonscan.com',
        apiUrl: 'https://api.polygonscan.com/api',
      },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 25770160,
      },
    },
    testnet: false,
  } as TEmmetChain;