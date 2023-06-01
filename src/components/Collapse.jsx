import React, { useState } from "react";
import "../styles/Collapse.css";

function Collapse({title, text}) {
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className="collapse-content" onClick={toggleCollapse}>
                <h4 className="collapse-title">{title}</h4>
                {open ? (
                    <i className="fa-solid fa-chevron-up chevron"></i>
                ) : (
                    <i className="fa-solid fa-chevron-down chevron"></i>
                )}
            </div>
                {open && (
                    <p className="collapse-text">{text}</p>
                )}
        </div>
    )
}

export default Collapse;