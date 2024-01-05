import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 6833895,
  //   domainId: 6833895,
  //   name: 'jupiter',
  //   displayName: 'Jupiter RollApp',
  //   nativeToken: { name: 'GAS', symbol: 'GAS', decimals: 18 },
  //   publicRpcUrls: [{ http: 'https://evmrpc.jupiternft.xyz' }],
  //   blockExplorers: [
  //     {
  //       name: 'Blockscout',
  //       url: 'https://explorer.jupiternft.xyz,
  //       apiUrl: 'https://explorer.jupiternft.xyz/api/eth-rpc',
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 3,
  //   },
  //   logoURI: '/logo.svg',
  // },
};
