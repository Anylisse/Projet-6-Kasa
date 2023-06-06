import React from "react";
import logo from "../assets/logoKasa.svg";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="logo-kasa">
                    <NavLink to="/">
                        <img src={logo} alt="Logo de Kasa" />
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;