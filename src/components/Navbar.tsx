import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className="w-full py-3 flex justify-between border-b border-slate-500">
            <Link to="/" className="text-emerald-200 font-thin tracking-widest text-5xl md:text-3xl px-3">Rass</Link>
            <div className="divide-x divide-slate-500 mt-3">
                <Link to="/reviews" className="text-slate-300 text-2xl md:text-xl px-3 hover:text-teal-400">Reviews</Link>
                <Link to="/rate" className="text-slate-300 text-2xl md:text-xl px-3 mr-10 hover:text-teal-400">Rate</Link>
            </div>
        </div>
    )
}