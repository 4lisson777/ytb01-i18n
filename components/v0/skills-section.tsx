/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aDxMjxLTtsj
 */
import { Skill } from "./skill"

export default function Skills() {
    return (
        <section className="py-16 md:py-24" id="skills">
            <div className="text-center mb-10">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black dark:text-gray-200 mb-4">Popular JavaScript Frameworks</h2>
                <p className="text-xl text-black dark:text-gray-400">
                    Explore a wide variety of modern JavaScript frameworks used in web development.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* <div className="bg-transparent shadow-sm shadow-border py-3 px-4 lg:py-5 lg:px-6 flex flex-col items-center border border-gray-200 lg:hover:bg-gray-200 dark:bg-transparent dark:border-gray-700 lg:dark:hover:bg-zinc-900 rounded-md transition-colors">
                    <img
                        alt="React Logo"
                        className="mb-2 aspect-square rounded-full bg-slate-300"
                        height="60"
                        src="/placeholder.svg"
                        style={{
                            objectFit: "cover",
                        }}
                        width="60"
                    />
                    <h3 className="text-lg font-semibold mb-1 text-blue-500 dark:text-blue-300">React</h3>
                    <p className="text-gray-500 text-xs text-center dark:text-gray-400">A JavaScript library for building user interfaces.</p>
                </div> */}
                <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" title="React" description="A JavaScript library for building user interfaces." key={1} />
            </div>
        </section>
    )
}
