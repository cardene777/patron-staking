import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next'
import { Providers } from './components/Prividers'
import './globals.css'


export const metadata: Metadata = {
  title: 'PatronStaking',
  description: 'This is the demo of Patron Staking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )

}
