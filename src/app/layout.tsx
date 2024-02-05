import { Layout } from '@/components/Layout'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
          href="/font/spoqa.css"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
