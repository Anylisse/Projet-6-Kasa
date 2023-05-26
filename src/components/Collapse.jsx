import React, { useState } from "react";
import arrowUp from "../assets/upArrow.png";
import arrowDown from "../assets/downArrow.png";
import "../styles/Collapse.css";

function Collapse(props) {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className={props.classTitle} onClick={toggleCollapse}>
                <h4 className="collapse-title">{props.title}</h4>
                {open ? (
                    <img src={arrowUp} alt="Flèche vers le haut"/>
                ) : (
                    <img src={arrowDown} alt="Flèche vers le bas"/>
                )}
            </div>
                {open && (
                    <p className={props.classText}>{props.text}</p>
                )}
        </div>
    )
}

export default Collapse;