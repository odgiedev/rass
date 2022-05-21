import { Link } from "react-router-dom"

export function TitleHome() {
    return (
        <main className="flex h-[50vh] mx-5 mb-24 md:h-[85vh] md:mb-0">
            <div className="w-full h-1/3 mx-auto my-auto text-center">
                <h1 className="text-7xl md:text-9xl text-slate-200 font-bold break-words">
                    <Link to="/rate" className="hover:text-white">Rate</Link> a song!
                </h1>
                <p className="mt-4 text-4xl md:text-4xl text-slate-400 font-bold break-words">
                    Or just <Link to="/reviews" className="text-slate-300 hover:text-white">see reviews</Link> made by other users.
                </p>
            </div>           
        </main>
    )
}