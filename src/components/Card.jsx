import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card">
            <Link to={`/housing/${props.id}`}>
                <div className="div-card"></div>
                <img src={props.cover} alt="Logements" />
                <h3>{props.title}</h3>
            </Link>
        </div>
    )
}

export default Card;