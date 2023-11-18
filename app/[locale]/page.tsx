import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Home() {

  const t = useTranslations("Index")

  return (
    <main className='bg-black h-[100vh]'>
      <div className="grid grid-cols-[4fr_8fr] gap-x-4 max-w-7xl mx-auto pt-16">
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl tracking-tight font-extrabold text-gray-50 mb-5'>{t("title")}</h1>
          <p className='text-white text-xl mb-10'>{t("subtitle")}</p>
          <Button className="w-40" variant={'outline'} asChild>
            <Link href={'/start'}>
              {t("start")} <ChevronRight className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </div>
        <div className='flex justify-center'>
          <Image src="/earth.webp" width={400} height={400} alt='Logo' />
        </div>
      </div>
    </main >
  )
}