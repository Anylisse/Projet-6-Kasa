import React, { useState } from "react";
import "../styles/Collapse.css";

function Collapse(props) {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className={`${props.classTitle} classTitleCollapse`} onClick={toggleCollapse}>
                <h4 className="collapse-title">{props.title}</h4>
                {open ? (
                    <i className="fa-solid fa-chevron-up chevron"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down chevron"></i>
                )}
            </div>
                {open && (
                    <p className={`${props.classText} classTextCollapse`}>{props.text}</p>
                )}
        </div>
    )
}

export default Collapse;