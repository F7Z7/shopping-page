import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Layout from "./routes/layout.jsx";
import Hero from "./pages/Hero.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Hero/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
