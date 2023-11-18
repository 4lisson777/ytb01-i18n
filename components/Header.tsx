import Image from "next/image"
import SwitchLanguage from "./SwitchLanguage"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Header = () => {

    const t = useTranslations("Index")

    return (
        <header className="border-b-2 border-zinc-800 h-[64px] flex items-center justify-between px-6 bg-black">
            <div className="font-semibold text-xl tracking-tighter text-white">
                <Link className="flex gap-3 items-center" href={"https://github.com/4lisson777"} target="_blank">
                    <Image src={"/avatar.jpg"} width={40} height={40} alt="Avatar" className="rounded-full" />
                    4lisson777
                </Link>
            </div>
            <SwitchLanguage title={t("language")} />
        </header>
    )
}

export default Header