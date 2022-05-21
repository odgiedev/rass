import { Link } from "react-router-dom"
import {ReviewCard} from "./ReviewCard"

export function ReviewHome() {
    return (
        <div className="bg-gradient-to-r from-sky-800 to-cyan-900 h-auto">
            <h1 className="text-white text-center text-3xl font-bold py-3">Some reviews</h1>
            <div className="flex flex-wrap overflow-auto justify-around">
                <div className="mx-2 w-full md:w-2/5">
                    <ReviewCard
                            createdAt="2022-05-20"
                            title="Photograph"
                            author="Ed Sheeran"
                            link="https://www.youtube.com/watch?v=nSDgHBxUbVQ"
                            platform={1}
                            rate={5}
                            feedback="bla bla bla bla bla bla bla bla bla bla bla bla"
                        />
                </div>
                <div className="mx-2 w-full md:w-2/5">
                    <ReviewCard
                            createdAt="2022-05-20"
                            title="Yellow"
                            author="Coldplay"
                            link="https://www.youtube.com/watch?v=yKNxeF4KMsY"
                            platform={1}
                            rate={5}
                            feedback="bla bla bla bla bla bla bla bla bla bla bla bla"
                        />
                </div>
                <div className="mx-2 w-full md:w-2/5">
                    <ReviewCard
                            createdAt="2022-05-20"
                            title="Get Lucky"
                            author="Daft Punk"
                            link="https://www.youtube.com/watch?v=4D7u5KF7SP8"
                            platform={1}
                            rate={5}
                            feedback="bla bla bla bla bla bla bla bla bla bla bla bla"
                        />
                </div>
                <div className="mx-2 w-full md:w-2/5">
                    <ReviewCard
                            createdAt="2022-05-20"
                            title="Lonely"
                            author="Akon"
                            link="https://www.youtube.com/watch?v=6EEW-9NDM5k"
                            platform={1}
                            rate={4}
                            feedback="bla bla bla bla bla bla bla bla bla bla bla bla"
                        />
                </div>                
            </div>
            <Link to="/reviews" className="flex justify-center text-white text-xl hover:underline py-3 italic">See all</Link>
        </div>
    )
}