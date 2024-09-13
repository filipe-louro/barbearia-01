import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/utils/providers'
import React from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Barbearia 01',
  description: 'Corte seu cabelo.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
    <body className={montserrat.className}>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
