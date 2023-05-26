import React from "react";
import "../styles/HousingTitle.css";

function HousingTitle(props) {
    return (
        <>
        <h2 className="housing-title">{props.title}</h2>
        <h3 className="housing-location">{props.location}</h3>
        </>
    )
}

export default HousingTitle;