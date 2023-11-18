"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Languages } from 'lucide-react'
import Image from "next/image"
import Link from "next-intl/link"
import { usePathname } from "next-intl/client"
import { useLocale, useTranslations } from "next-intl"

const SwitchLanguage = ({ title }: { title: string }) => {

    const pathname = usePathname()
    const t = useTranslations("Index")
    const locale = useLocale()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex gap-2 items-center font-semibold">{t("language")} <Languages className="h-5 w-h-5" /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-800 border-zinc-600 flex flex-col items-center">
                <DropdownMenuItem className="focus:bg-zinc-500">
                    <Link href={pathname} locale="pt">
                        <Image src="/br-flag.png" width={24} height={24} alt="Português" />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-zinc-500">
                    <Link href={pathname} locale="en">
                        <Image src="/us-flag.png" width={24} height={24} alt="Inglês" />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SwitchLanguage