import {SUPPORTED_CHAINS} from '../chains';
import { Chain } from 'viem';

export type TChainDataParam = "bridge" | "id" | "name" | "url";

export type TChainName = keyof typeof SUPPORTED_CHAINS;

export type TEmmetChain = Chain & {
    emmetBridge: {
        address: string,
        blockCreated: number
    }
}