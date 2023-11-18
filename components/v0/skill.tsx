/* eslint-disable @next/next/no-img-element */

interface IProps {
    image: string
    title: string
    description: string
}
export const Skill = (props: IProps) => {
    return (
        <div className="bg-transparent shadow-sm shadow-border py-3 px-4 lg:py-5 lg:px-6 flex flex-col items-center border border-gray-200 lg:hover:bg-gray-200 dark:bg-transparent dark:border-gray-700 lg:dark:hover:bg-zinc-900 rounded-md transition-colors">
            <img
                alt="React Logo"
                className="mb-2 aspect-square rounded-full"
                height="60"
                src={props.image}
                style={{
                    objectFit: "contain",
                }}
                width="60"
            />
            <h3 className="text-lg font-semibold mb-1 text-blue-500 dark:text-blue-300">{props.title}</h3>
            <p className="text-gray-500 text-xs text-center dark:text-gray-400">{props.description}</p>
        </div>
    )
}