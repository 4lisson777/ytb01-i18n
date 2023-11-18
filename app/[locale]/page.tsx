import HomeAnimation from "@/components/HomeAnimation/home-animation";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { headers } from "next/headers";
import { useTranslations } from "next-intl";

const Home = () => {

    const t = useTranslations("Home");

    const userAgent = headers().get("user-agent");
    const isMobile = userAgent!.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );

    return (
        <main className="container mx-auto xl:max-w-7xl overflow-hidden py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center mb-16 lg:mb-24">
                <div className="pb-6 pt-4 lg:pt-0 text-center lg:text-left">
                    <p className="scroll-m-20 pb-2 text-xl lg:text-2xl font-semibold tracking-tight first:mt-0">Alisson Santos</p>
                    <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl">{t("h1")}</h1>
                    <p className="leading-7 lg:text-lg py-4 max-w-sm">
                        {t("p")}
                    </p>
                    <Button className="gap-2 items-center" size={isMobile ? "sm" : "lg"} asChild>
                        <a href="#skills">
                            {t("button")} <ChevronRight className="w-5 h-5" />
                        </a>
                    </Button>
                </div>
                <div className="pt-4 lg:pt-10 flex justify-center lg:justify-end">
                    <HomeAnimation />
                </div>
            </div>
        </main>
    )
}

export default Home;