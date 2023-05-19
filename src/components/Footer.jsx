import React from "react";
import logo from "../assets/logoKasaWhite.png";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;