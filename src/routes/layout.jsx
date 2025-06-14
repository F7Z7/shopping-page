import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div className="flex flex-col bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50">
            <Navbar/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}