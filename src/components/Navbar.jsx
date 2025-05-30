    import React from "react";
    import { NavLink } from "react-router-dom";

    export default function Navbar() {
        return (
            <header>
                <nav>
                    <ul className="nav">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to="/products">
                                Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "navActive" : ""} to="/contact">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
