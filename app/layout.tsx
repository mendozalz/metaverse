import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mendozalz Metaverse',
  description: 'Mi primer metaverso creado con Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
