import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Sprites from "@/components/Sprites/sprites"
import { Header } from '@/components/ui/header'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alisson Santos - Frontend Developer',
  description: 'Desenvolvedor Web Frontend em Recife - Pernambuco',
}

const locales = ['en', 'pt'];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sprites />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
