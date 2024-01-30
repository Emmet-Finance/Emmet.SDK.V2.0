

export const TOKEN_CHAIN_CONTRACT = {
    EURC: {
        // Mainnets: https://developers.circle.com/stablecoins/docs/eurc-on-main-networks
        avalanche: '0xc891eb4cbdeff6e073e859e987815ed1505c2acd',
        ethereum: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c',
        // Testnets: https://developers.circle.com/stablecoins/docs/eurc-on-test-networks
        avalancheFuji: "0x5e44db7996c682e92a960b65ac713a54ad815c6b",
        sepolia: '0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4',

    },
    USDC: {
        // Mainnets:
        arbitrum: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        avalanche: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        ethereum: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        optimistm: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
        polygon: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
        // Testnets:
        arbitrumSepolia: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',
        avalancheFuji: '0x5425890298aed601595a70AB815c96711a31Bc65',
        baseSepolia: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
        optimismSepolia: '0x5fd84259d66Cd46123540766Be93DFE6D43130D7',
        sepolia: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
        polygonMumbai: '0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97',
    }
}

export type TTokenName = keyof typeof TOKEN_CHAIN_CONTRACT;