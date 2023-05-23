import React from "react";
import Card from "./Card";
import data from "../data/logements.json";
import "../styles/Gallery.css";

function Gallery(){
    return (
        <div className="gallery">
            {data.map((e) => (
                <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
            ))}
        </div>
    )
}

export default Gallery;