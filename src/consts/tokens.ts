import { WarpTokenConfig } from '../features/tokens/types';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenList: WarpTokenConfig = [
  // Example collateral token for an EVM chain
  {
    type: 'collateral',
    chainId: 6833895,
    address: '0x9B0e4fd977f9FC723aC9057d41db55e7A29eb75a',
    hypCollateralAddress: '0xff0757382833D6A274A3Bc035720A6089f93c3D5',
    name: 'Pepe token',
    symbol: 'Pepe',
    decimals: 18,
    logoURI: '/logos/pepe.jpg', // See public/logos/
  },
  {
    chainId: 6833895,
    name: 'RollApes',
    symbol: 'RollApe',
    decimals: 0,
    type: 'collateral',
    address: '0xe203370D7F5D6b67701e8fcebF220e08dA22464D',
    hypCollateralAddress: '0x3c0aDaa078B0232645e2844b0f38547B3EE39552',
    isNft: true,
    logoURI: '/logos/ape.gif', // See public/logos/

  },
];
