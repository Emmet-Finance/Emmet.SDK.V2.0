# Emmet Finance SDK v2.0

## Library installation

Installation with `npm`:

```bash
npm install emmet-sdk-v2
npm install @types/emmet-sdk-v2 --save-dev
```

Installation with `yarn`:

```bash
yarn add emmet-sdk-v2
yarn add @types/emmet-sdk-v2 -D
```

## Library contents

```bash
|____src
| |____abis                     (Contract ABIs)
| | |____messageTransmitter.ts  (Circle Transmitter)
| | |____erc20.ts               (ERC20 / USDC)
| | |____index.ts               (Folder exports)
| | |____TokenMessengerABI.ts   (Circle Messenger)
| |____types                    (Library types and constants)
| | |____consts.ts              (General constants)
| | |____tokens.ts              (Token-related constants)
| | |____index.ts               (Folder exports)
| | |____chains.ts              (Chain-related types & constants)
| |____utils                    (Utility functions)
| | |____viem.ts                (VIEM library involving)
| | |____index.ts               (Folder exports)
| | |____chains.ts              (Chain object-related)
| | |____address.ts             (Blockchain address-related)
| |____index.ts                 (Library exports)
| |____chains                   (Blockchain Objects)
| | |____base.ts
| | |____ethereum.ts
| | |____polygonMumbai.ts
| | |____baseSepolia.ts
| | |____arbitrum.ts
| | |____polygon.ts
| | |____sepolia.ts
| | |____optimism.ts
| | |____optimismSepolia.ts
| | |____avalanche.ts
| | |____index.ts
| | |____arbitrumSepolia.ts
| | |____avalancheFuji.ts
```

## Supported Blockchains

1. `Mainnet` with infura nodes support
    - Arbitrum
    - Avalanche
    - Base (no infura support!)
    - Ethereum
    - Optimism
    - Polygon

2. `Testnet` with infura nodes support
    - Arbitrum Sepolia
    - Avalanche Fuji
    - Base (no infura support!)
    - Ethereum Sepolia
    - Optimism Sepolia
    - Polygon Mumbai

## Conecting to an EVM Blockchain

### 1. Only reading

If `infuraApiKey` is provided, an infura node relevant to the provided `chainName` will be used. Otherwise a public RPC node will be used for communication with the chosen chain.

```ts
import { getProvider } from 'emmet-sdk-v2';
import { config } from 'dotenv';
config();

const { INFURA_API_KEY } = process.env;
const chainName = 'ethereum';

const provider = getProvider(
    chainName,
    INFURA_API_KEY // (optional)
);
```

### 2. Writing & reading in a backend

Never use in any environment, where your private key can be exposed to strangers. Only siutable for initial testing or very secure backend.

```ts
import { getPrivateKeySigner } from 'emmet-sdk-v2';
import { config } from 'dotenv';
config();

const { PRIVATE_KEY, INFURA_API_KEY } = process.env;
const chainName = 'polygon';

cost backendSigner = getPrivateKeySigner(
    chainName,
    PRIVATE_KEY,
    INFURA_API_KEY // optional
);
```

### 3. Writing & reading in a Browser

```ts
import { getBrowserExtentionSigner } from 'emmet-sdk-v2';
import {config} from 'dotenv';
config();

const { INFURA_API_KEY } = process.env;
const chainName = 'base';

const signer = getBrowserExtentionSigner(
    chainName
);
```