'use client'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import {
  configureChains,
  createConfig,
  WagmiConfig,
} from "wagmi";
import { polygonMumbai } from "@wagmi/core/chains";
import { ALCHEMY_KEY } from "@config/config"


const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: ALCHEMY_KEY ?? "" }), publicProvider()]
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
