import { useEffect, useState } from "react";
import { ReviewCard } from "../components/ReviewCard";
import { Pagination } from "../components/Pagination";

import { api } from "../lib/api";

export function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.get("/reviews")
            .then((response) => setReviews(response.data.data))
            .catch((err) => {
                console.error("ERROR -> " + err);
            });
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            <form className="w-3/4 md:w-1/2">
                <input type="text" placeholder="Search" className="rounded my-3 pl-4 py-2 text-lg w-full" disabled/>
            </form>
            
            {
                reviews.length > 0
                ?
                reviews.map((r:any) => {
                    return <div key={r.id} className="w-full mx-5 md:w-3/4">
                        <ReviewCard
                            title={r.title}
                            author={r.author}
                            link={r.link}
                            platform={r.platform}
                            rate={r.rate}
                            feedback={r.feedback}
                            createdAt={r.createdAt}
                        />
                    </div>
                })
                :
                <div className="w-full flex justify-center my-4">
                    <h1 className="text-white text-2xl">Without reviews :C</h1>
                </div>
            }
            <div className="w-full flex justify-center">
                <Pagination />
            </div>
        </div>
    )
}