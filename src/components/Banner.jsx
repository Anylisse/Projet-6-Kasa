import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.src} className="img-banner" alt="Bannière" />
            {props.title ? <h1>{props.title}</h1> : null}
        </div>
    )
}

export default Banner;