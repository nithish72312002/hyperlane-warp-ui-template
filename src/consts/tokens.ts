import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // bsc
  {
    type: 'collateral',
    chainId: 56,
    address: '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
    hypCollateralAddress: '0xC27980812E2E66491FD457D488509b7E04144b98',
    name: 'Zebec',
    symbol: 'wZBC',
    decimals: 9,
    logoURI: '/logos/zebec.png',
  },

  // nautilus
  {
    type: 'native',
    chainId: 22222,
    hypNativeAddress: '0x4501bBE6e731A4bC5c60C03A77435b2f6d5e9Fe7',
    name: 'Zebec',
    symbol: 'wZBC',
    decimals: 18,
    logoURI: '/logos/zebec.png',
  },

  // solana
  {
    type: 'collateral',
    chainId: 1399811149,
    address: 'wzbcJyhGhQDLTV1S99apZiiBdE4jmYfbw99saMMdP59',
    hypCollateralAddress: 'EJqwFjvVJSAxH8Ur2PYuMfdvoJeutjmH6GkoEFQ4MdSa',
    name: 'Zebec',
    symbol: 'wZBC',
    decimals: 9,
    isSpl2022: false,
    logoURI: '/logos/zebec.png',
  },

  {
    chainId: 56,
    name: 'Ethereum Token',
    symbol: 'ETH',
    decimals: 18,
    type: 'collateral',
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    hypCollateralAddress: '0x2a6822dc5639b3fe70de6b65b9ff872e554162fa',
    isNft: false,
    logoURI: '/logos/weth.png',
  },
  {
    chainId: 56,
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 18,
    type: 'collateral',
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    hypCollateralAddress: '0x6937a62f93a56D2AE9392Fa1649b830ca37F3ea4',
    isNft: false,
    logoURI: '/logos/USDC.svg',
  },
  {
    chainId: 56,
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 18,
    type: 'collateral',
    address: '0x55d398326f99059ff775485246999027b3197955',
    hypCollateralAddress: '0xb7d36720a16A1F9Cfc1f7910Ac49f03965401a36',
    isNft: false,
    logoURI: '/logos/tether.svg',
  },
  {
    chainId: 56,
    name: 'BTCB Token', // May be worth overriding this to "Bitcoin"
    symbol: 'BTCB', // Also same for this and "BTC"
    decimals: 18,
    type: 'collateral',
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    hypCollateralAddress: '0xB3545006A532E8C23ebC4e33d5ab2232Cafc35Ad',
    isNft: false,
    logoURI: '/logos/bitcoin.svg',
  },
  {
    chainId: 56,
    name: 'PoseiSwap Token',
    symbol: 'POSE',
    decimals: 18,
    type: 'collateral',
    address: '0xd7518e8cfd7448201155bbbedeed88888e3575ae',
    hypCollateralAddress: '0x807D2C6c3d64873Cc729dfC65fB717C3E05e682f',
    isNft: false,
    logoURI: '/logos/POSE.jpg',
  },
];
