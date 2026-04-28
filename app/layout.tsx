import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Mainframe Wood Construction | Custom Carpentry & Deck Building in Dallas-Fort Worth',
  description: 'Quality wood framing, custom decks, pergolas, and outdoor living solutions built for homeowners across Dallas–Fort Worth. Licensed & insured with free estimates.',
  keywords: 'carpentry, deck building, wood framing, pergolas, Dallas, Fort Worth, Texas, Trex deck, composite railing',
  authors: [{ name: 'Mainframe Wood Construction' }],
  openGraph: {
    title: 'Mainframe Wood Construction | Custom Carpentry & Deck Building',
    description: 'Quality wood framing, custom decks, pergolas, and outdoor living solutions built for homeowners across Dallas–Fort Worth.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fa' },
    { media: '(prefers-color-scheme: dark)', color: '#f8f9fa'  },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
