'use client'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, mainnet, sepolia, WagmiConfig,} from 'wagmi'




const { chains, publicClient } = configureChains(
  [sepolia, ],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID??"" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers({ children }: { children: React.ReactNode }) {
    return (

      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
            {children}
        </RainbowKitProvider>
      </WagmiConfig>
    )
}