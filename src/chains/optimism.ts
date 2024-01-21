import { TEmmetChain } from '../types';

const sourceId = 1 // Ethereum

export const optimism = {
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  id: 10,
  name: 'OP Mainnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://mainnet.optimism.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Optimism Explorer',
      url: 'https://optimistic.etherscan.io',
      apiUrl: 'https://api-optimistic.etherscan.io',
    },
  },
  contracts: {
    l2OutputOracle: {
      [sourceId]: {
        address: '0xdfe97868233d1aa22e815a266982f2cf17685a27',
      },
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 4286263,
    },
    portal: {
      [sourceId]: {
        address: '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed',
      },
    },
  },
  sourceId,
} as TEmmetChain;