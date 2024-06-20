import './global.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { Navbar } from './components/layout/navbar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
