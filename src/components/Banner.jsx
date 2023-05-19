import React from "react";
import "../styles/Banner.css";

function Banner(props) {
    return (
        <div className="banner">
            <img src={props.src} alt={props.alt} className="banner-home" />
            {props.title ? <p className="banner-title">{props.title}</p> : ""}
        </div>
    );
  }
  
  export default Banner;