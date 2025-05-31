import React from "react";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <header className="flex flex-col justify-between items-center bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50  m-5 text-[20px] font-bold p-2">

            <nav>
                <ul className="flex justify-around gap-8 items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? "nav-active" : "text-black"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({isActive}) =>
                                isActive ? "nav-active" : "text-black"
                            }
                        >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                isActive ? "nav-active" : "text-black"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
