import { SpotifyLogo, Star, YoutubeLogo } from "phosphor-react"

interface Props {
    title: string;
    author: string;
    link: string;
    platform: number;
    rate: number;
    feedback: string;
    createdAt: string;
}

export function ReviewCard(props: Props) {
    const date = props.createdAt.slice(0, 10);;
    
    return (
        <div className="my-3 p-4 rounded-lg border border-slate-400 mx-auto bg-gradient-to-r from-blue-900 to-indigo-900">
            <div className="text-white font-bold text-xl">

            </div>
            <div className="flex text-white justify-around font-bold text-md">
                <span className="italic">Title: <span className="text-lg not-italic">{props.title}</span></span>
                <span className="italic">Author: <span className="text-lg not-italic">{props.author}</span></span>
                <span><a target="_blank" href={props.link}> {props.platform == 2 ? <SpotifyLogo size={30} color="#00FF00" /> : <YoutubeLogo size={30} color="#FF0000" />} </a></span>
            </div>
            {
                props.feedback
                &&
                <>
                    <hr className="my-2" />
                    <div className="text-slate-300 ml-3">
                        <h1>{props.feedback}</h1>
                    </div>
                </>
            }

            <hr className="my-2" />
            <div className="flex justify-between text-slate-200 font-bold text-md">
                <div className="flex">
                    {[...Array(props.rate)].map((star) => {
                        return (
                            <Star size={25} color="#fbff00" weight="fill" />
                        )
                    })}
                </div>
                <div className="inline-block md:w-3/5 md:flex md:justify-between">
                    <span className="italic">{date}</span> <br />
                    <span className="text-slate-500 italic">By: Anonymous</span>
                </div>
            </div>
        </div>
    )
}