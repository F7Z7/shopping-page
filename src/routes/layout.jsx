import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
    return (
        <div>
            <Navbar/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}