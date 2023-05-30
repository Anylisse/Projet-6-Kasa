import React from "react";
import emptyStar from "../assets/starGrey.png";
import fullStar from "../assets/starRed.png";
import "../styles/Rating.css";

function Rating(props) {
    const rate = props.rate;
    const grades = [1, 2, 3, 4, 5];
    
    return (
        <div className="stars">
        {grades.map((grade) =>
        rate >= grade ? (
            <img key={grade.toString()} src={fullStar} alt="Étoiles rouges"/>
        ) : (
            <img key={grade.toString()} src={emptyStar} alt="Étoiles grises"/>   
        )
        )}
        </div>
    )
}

export default Rating;