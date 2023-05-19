import React from "react";
import logo from "../assets/logoKasa.png";
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
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>À Propos</li>
                    </NavLink>
                    </ul>
            </nav>
        </header>
    )
}
export default Header;