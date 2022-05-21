import { Star } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/api";

export function Rate() {
    const [rating, setRating] = useState<number | null>(null);
    const [hover, setHover] = useState<number | null>(null);

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    
    const [title, setTitle] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const [link, setLink] = useState<string | null>(null);
    const [rate, setRate] = useState<number | null>(null);
    const [platform, setPlatform] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);

    async function saveReview(event: FormEvent) {
        event.preventDefault();

        setErrorMsg(null);
        setSuccessMsg(null)

        if(!title || !author || !link || !rate || !platform) {
            return setErrorMsg('Complete all the fields correctly.');
        }

        await api.post('/reviews/create', {
            title,
            author,
            link,
            rate,
            platform,
            feedback,
        });
        
        setSuccessMsg("Review created.");
    }

    return (
        <>
            <h1 className="text-center text-white text-4xl my-2 uppercase">Make your review</h1>
            {
                errorMsg
                &&
                <div className="text-white text-xl text-center bg-red-600 py-2">
                    <h1>{errorMsg}</h1>
                </div>
            }

            {
                successMsg
                &&
                <div className="text-white text-xl text-center bg-green-600 py-2">
                    <h1>{successMsg}</h1>
                </div>
            }

            <form
                className="flex flex-col items-center w-11/12 md:w-1/3 p-3 my-11 md:my-2 md:mb-5 mx-auto border rounded bg-slate-800"
                onSubmit={saveReview}
            >
                <input
                    type="text"
                    placeholder="Title"
                    className="rounded w-full pl-4 py-2 my-2 bg-gray-200 focus:bg-white"
                    onChange={(event) => setTitle(event.target.value)}
                    maxLength={100}
                />

                <input
                    type="text"
                    placeholder="Author"
                    className="rounded w-full pl-4 py-2 my-2 bg-gray-200 focus:bg-white"
                    onChange={(event) => setAuthor(event.target.value)}
                    maxLength={60}
                />
               
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Link"
                        className="rounded w-4/6 pl-4 py-2 my-2 bg-gray-200 focus:bg-white"
                        onChange={(event) => setLink(event.target.value)}
                        maxLength={255}
                    />

                    <select
                        className="ml-3 py-2 px-1 rounded bg-gray-200 focus:bg-white"
                        onChange={(event) => setPlatform(event.target.options.selectedIndex)}
                    >
                        <option></option>
                        <option>YouTube</option>
                        <option>Spotify</option>
                    </select>
                </div>

                <textarea
                    rows={5}
                    placeholder="Feedback (Optional)"
                    className="w-full p-2 my-2 rounded bg-gray-200 focus:bg-white"
                    onChange={(event) => setFeedback(event.target.value)}
                ></textarea>
                
                <div className="flex justify-center w-full p-2 pl-4">
                    <span className="text-gray-100 text-md mr-2 pt-1">Rate:</span>

                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <label key={i}>
                                <input
                                    className="hidden"
                                    type="radio"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                    onChange={(event) => setRate(ratingValue)}
                                />

                                <Star
                                    className="duration-200 cursor-pointer"
                                    size={30}
                                    color={ratingValue <= (hover || rating)! ? "#fbff00" : "#FFF"}
                                    weight="fill" 
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>      
                        )
                    })}
                </div>

                <hr className="w-full my-2"/>

                <div className="w-full flex justify-end">
                    <button className="px-3 py-2 font-semibold text-white rounded border bg-sky-900 hover:bg-sky-800">Create</button>    
                </div>
            </form>
        </>
    )
}