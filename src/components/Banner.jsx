import React from "react";
import BannerPicture from "../assets/homeImg.webp";
import "../styles/Banner.css";

function Banner() {
    return (
        <div className="banner">
            <img src={BannerPicture} className="img-home" alt="Bannière accueil" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
  }
  
  export default Banner;