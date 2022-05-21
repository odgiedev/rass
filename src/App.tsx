import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

import { NotFound } from "./pages/notFound"
import { Home } from "./pages/home"
import { Reviews } from "./pages/reviews"
import { Rate } from "./pages/rate"

export function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFound/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/reviews" element={<Reviews/>} />
                <Route path="/rate" element={<Rate/>} />
            </Routes>
            <Footer />
        </Router>
    )
}