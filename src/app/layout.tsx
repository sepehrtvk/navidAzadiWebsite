import { ReactNode } from 'react'
import Head from 'next/head'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'نوید آزادی | مربی بدنسازی و فیتنس',
  description: 'مربی بدنسازی و فیتنس',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <Head>
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
