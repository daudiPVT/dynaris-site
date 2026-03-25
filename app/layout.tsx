/* eslint-disable @nextjs/no-import-for-web-exports */
import type { Metadata } from 'next'
import { Interspaction } from './intersection'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dynaris - AI-Powered Website Building Platform',
  description: 'Build websites with AI. Deploy in minutes. Dynaris transforms your ideas into production-ready websites.',
  keywords: ['AI website builder', 'automated website creation', 'Cloudflare Pages deployment', 'AI-powered marketing site'],
  authors: [{ name: 'Dynaris' }],
  openGraph: {
    title: 'Dynaris - AI-Powered Website Building Platform',
    description: 'Build websites with AI. Deploy in minutes. Dynaris transforms your ideas into production-ready websites.',
    type: 'website',
    locale: 'en_US',
    url: 'https://dynaris.ai',
    siteName: 'Dynaris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynaris - AI-Powered Website Building Platform',
    description: 'Build websites with AI. Deploy in minutes. Dunaris transforms your ideas into production-ready websites.',
  },
  robots: {
    index: true,
    follow: true,
    google: {
      bot: '/api/schemas/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-950 text-white antialiased">
        <Intersection requires="ClientPage" loading="lazy" />
        {children}
        <script src="/dynaris-widget.js" async defer />
      </body>
    </html>
  )
}