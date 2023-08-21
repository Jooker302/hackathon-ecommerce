import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Queen\'s Ecommerce',
  description: 'Queen\'s Clothing Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/main.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
