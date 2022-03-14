import { status } from "./index";

const network = "testnet"

export const NicaNFTContract = "0xd7e5a38fad7432e5"
export const NonFungibleToken = network === status ? "0x631e88ae7f1d7c20" : "0x1d7e57aa55817448";
export const NFTStorefront = network === status ? "0x94b06cfca1d8a476" : "0x4eb8a10cb9f87357";
export const FungibleToken = network === status ? "0x9a0766d93b6608b7" : "0xf233dcee88fe0abe";
export const FUSD = network === status ? "0xe223d8a629e49c68" : "0x3c5959b568896393";