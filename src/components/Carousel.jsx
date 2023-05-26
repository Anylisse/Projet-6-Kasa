import React, { useState } from "react";
import arrowLeft from "../assets/leftArrow.png";
import arrowRight from "../assets/rightArrow.png";
import "../styles/Carousel.css";

function Carousel({ pictures }) {
    // On crée un Hook d'état
    const [current, setCurrent] = useState(0);
    const length = pictures.length; //Longueur du tableau des images

    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }; // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante

    const prevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }; // Si l'image actuelle est la première, on revient à la dernière, sinon on passe à l'image précédente

    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    } // Si le tableau est vide, on ne retourne rien

    return (
        <div className="carousel">
            <div className="carousel-pictures">
            <img src={pictures[current]} className="carousel-img" alt="Photos logements"/>
            </div>
            <div className="carousel-arrows">
                {length > 1 && ( // Si il y a plus d'une image, on affiche les flèches
                    <img src={arrowLeft} onClick={prevImg} className="carousel-prev" alt="Flèche de gauche"/>
                )}
                {length > 1 && (
                    <img src={arrowRight} onClick={nextImg} className="carousel-next" alt="Flèche de droite"/>
                )}  
            </div>
            {length > 1 ? ( // Si il n'y a qu'une image, les flèches et le compteur ne s'affichent pas
            <div className="carousel-counter">
            {current + 1}/{length} {/* Affichage du compteur */}
            </div>
            ) : ("")
            }
        </div>            
    )
}

export default Carousel;