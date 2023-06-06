import React from "react";
import "../styles/HousingHost.css";

function HousingHost(props) {
    return (
        <div className="housing-host">
            <h3>{props.hostName}</h3>
            <img src={props.hostPicture} alt="Hébergeur" />
        </div>
    )
}

export default HousingHost;