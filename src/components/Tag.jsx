import React from "react";
import "../styles/Tag.css";

function Tag(props) {
    return (
        <div className="tag">
            <h4>{props.tag}</h4>
        </div>
    )
}

export default Tag;