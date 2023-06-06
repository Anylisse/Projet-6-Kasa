import React from "react";
import Header from "../components/Header";
import AboutImg from "../assets/aboutImg.webp";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
    return (
        <>
            <Header />
            <div className="container-about">
                <img src={AboutImg} className="img-about" alt="Bannière à propos" />
            </div>
            <main>
                <div className="about-collapse">
                    <Collapse title="Fiabilité"
                        text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>

                    <Collapse title="Respect"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

                    <Collapse title="Service"
                        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question."/>

                    <Collapse title="Sécurité"
                        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
            au critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
            de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About;