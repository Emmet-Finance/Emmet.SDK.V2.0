import { arbitrum } from './arbitrum';
import { arbitrumSepolia } from './arbitrumSepolia';
import { avalanche } from './avalanche';
import { avalancheFuji } from './avalancheFuji';
import { base } from './base';
import { baseSepolia } from './baseSepolia';
import { ethereum } from './ethereum';
import { optimism } from './optimism';
import { optimismSepolia } from './optimismSepolia';
import { polygon } from './polygon';
import { polygonMumbai } from './polygonMumbai';
import { sepolia } from './sepolia';

// MAINNETS:
export * from './arbitrum';
export * from './avalanche';
export * from './base';
export * from './ethereum';
export * from './optimism';
export * from './polygon';

// TESTNETS:
export * from './arbitrumSepolia';
export * from './avalancheFuji';
export * from './baseSepolia';
export * from './optimismSepolia';
export * from './polygonMumbai';
export * from './sepolia';

export const MAINNETS = {
    arbitrum: arbitrum,
    avalanche: avalanche,
    base: base,
    ethereum: ethereum,
    optimism: optimism,
    polygon: polygon
}

export const TESTNETS = {
    arbitrumSepolia: arbitrumSepolia,
    avalancheFuji: avalancheFuji,
    baseSepolia: baseSepolia,
    optimismSepolia: optimismSepolia,
    polygonMumbai: polygonMumbai,
    sepolia: sepolia
};

export const SUPPORTED_CHAINS = {...MAINNETS, ...TESTNETS};