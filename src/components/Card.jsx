import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card">
            <Link to={`/logements/${props.id}`} className="link">
                <div className="div-card">
                    <img src={props.cover} alt="Logements" className="card-img" />
                    <h2>{props.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default Card;