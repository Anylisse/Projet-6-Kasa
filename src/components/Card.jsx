import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card">
            <Link to={`/logements/${props.id}`}>
                <div className="div-card"></div>
                    <img src={props.cover} alt="Logements" />
                    <h2>{props.title}</h2>
            </Link>
        </div>
    )
}

export default Card;