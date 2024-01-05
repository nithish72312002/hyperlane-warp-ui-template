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
    hypCollateralAddress: '0x2294f7aD5818BA3aD22872d3fECE08dF49BCdAb2',
    name: 'Pepe token',
    symbol: 'Pepe',
    decimals: 18,
    logoURI: '/logos/weth.png', // See public/logos/
  },

  // Example NFT (ERC721) token for an EVM chain
  {
    chainId: 6833895,
    name: 'Rollapes',
    symbol: 'Rollape',
    decimals: 0,
    type: 'collateral',
    address: '0xe203370D7F5D6b67701e8fcebF220e08dA22464D',
    hypCollateralAddress: '0x70FC3d61063135ff080d5235EAd3a319E0aE9ddD',
    isNft: true,
  },
];
