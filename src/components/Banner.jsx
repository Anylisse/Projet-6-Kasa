import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.src} alt={props.alt} className="banner-home" />
            {props.title ? <h1>{props.title}</h1> : ""}
        </div>
    )
  }
  
  export default Banner;