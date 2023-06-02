import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    return (
        <div className="banner">
            <div className="banner-home"></div>
            <img src={props.src} alt="Bannière accueil" />
            {props.title ? <h1>{props.title}</h1> : ""}
        </div>
    )
  }
  
  export default Banner;