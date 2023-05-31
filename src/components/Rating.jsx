import React from "react";
import "../styles/Rating.css";

function Rating(props) {
    return <i className={`fa-solid fa-star rating ${props.color}`}></i>;
}

export default Rating;