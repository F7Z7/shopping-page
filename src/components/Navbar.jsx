import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50 p-3 shadow-md">
            <nav className="w-full m-2 p-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="text-2xl font-extrabold text-rose-500">Stark.Shoppy</div>
                <ul className="flex flex-row sm:flex-row items-center gap-6 text-lg font-semibold">
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
                            Products
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
