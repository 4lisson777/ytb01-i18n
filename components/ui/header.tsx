import { ModeToggle } from "./theme-toggler"
import { LanguageToggle } from "./language-toggler"

export const Header = () => {
    return (
        <header className="absolute top-0 z-40 w-full flex items-end justify-end gap-2 p-2 lg:p-4 border-b border-gray-300 dark:border-gray-900 border-solid">
            <LanguageToggle />
            <ModeToggle />
        </header>
    )
}