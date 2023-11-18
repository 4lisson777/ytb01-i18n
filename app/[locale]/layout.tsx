import Header from '@/components/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Internacionalização no Next 13',
  description: 'Aprenda como ter multi-idiomas no seu site.',
}

const locales = ['en', 'pt'];

export default async function RootLayout({children,  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className + " before:w-[100vw] before:h-full before:min-h-screen before:block before:content-[''] before:absolute before:z-1 before:top-0 before:left-0 before:bg-[url(/stars.svg)] before:bg-repeat before:bg-contain relative z-0 before:pointer-events-none before:z-[0] overflow-hidden before:animate-move-up"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
