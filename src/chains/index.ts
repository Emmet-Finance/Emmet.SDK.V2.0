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

export const SUPPORTED_CHAINS = { ...MAINNETS, ...TESTNETS };

export const infuraEndpoints = {
    // Mainnets:
    arbitrum: "https://arbitrum-mainnet.infura.io/v3/",
    avalanche: "https://avalanche-mainnet.infura.io/v3/",
    base: "",
    ethereum: "https://mainnet.infura.io/v3/",
    optimism: "https://optimism-mainnet.infura.io/v3/",
    polygon: "https://polygon-mainnet.infura.io/v3/",
    // Testnets:
    arbitrumSepolia: "https://arbitrum-sepolia.infura.io/v3/",
    avalancheFuji: "https://avalanche-fuji.infura.io/v3/",
    baseSepolia: "",
    optimismSepolia: "https://optimism-sepolia.infura.io/v3/",
    polygonMumbai: "https://polygon-mumbai.infura.io/v3/",
    sepolia: "https://sepolia.infura.io/v3/",
}