import { ChainMap, ChainMetadataWithArtifacts, ProtocolType } from '@hyperlane-xyz/sdk';
import { solana, solanadevnet, solanatestnet } from '@hyperlane-xyz/sdk/dist/consts/chainMetadata';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadataWithArtifacts> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 1234,
  //   domainId: 1234,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   publicRpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },

  // Including configs for some Solana chains by default
  solana: {
    ...solana,
    mailbox: 'TODO',
    interchainGasPaymaster: '',
    validatorAnnounce: '',
  },
  solanatestnet: {
    ...solanatestnet,
    mailbox: 'TODO',
    interchainGasPaymaster: '',
    validatorAnnounce: '',
  },
  solanadevnet: {
    ...solanadevnet,
    mailbox: '4v25Dz9RccqUrTzmfHzJMsjd1iVoNrWzeJ4o6GYuJrVn',
    interchainGasPaymaster: '',
    validatorAnnounce: '',
  },
  proteustestnet: {
    chainId: 88002,
    domainId: 88002,
    name: 'proteustestnet',
    protocol: ProtocolType.Ethereum,
    displayName: 'Proteus Testnet',
    displayNameShort: 'Proteus',
    nativeToken: {
      name: 'Zebec',
      symbol: 'ZBC',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://api.proteus.nautchain.xyz/solana',
      },
    ],
    mailbox: '0x918D3924Fad8F71551D9081172e9Bb169745461e',
    interchainGasPaymaster: '0x06b62A9F5AEcc1E601D0E02732b4E1D0705DE7Db',
    validatorAnnounce: '0xEEea93d0d0287c71e47B3f62AFB0a92b9E8429a1',
  },
};
