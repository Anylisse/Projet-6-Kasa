import React from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import HousingTitle from "../components/HousingTitle";
import HousingHost from "../components/HousingHost";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/Logements.css";
import Footer from "../components/Footer";

function Logements() {
    const { id } = useParams();
    const housing = data.find((housing) => housing.id === id)
    const rates = [1, 2, 3, 4, 5];

    if (!housing) {
        return <Navigate to={"/Error404"} />
    }

    return (
        <>
            <Header />
            <main>
                <Carousel pictures={housing.pictures} />
                <div className="housing-description">
                    <div className="housing-title-location">
                        <HousingTitle title={housing.title} location={housing.location} />
                        <div className="housing-tag">
                            {housing.tags.map((e, index) => (
                                <Tag key={index} tag={e} />
                            ))}
                        </div>
                    </div>
                    <div className="housing-host-rate">
                        <div className="host-housing">
                            <HousingHost hostPicture={housing.host.picture} hostName={housing.host.name} />
                        </div>
                        <div className="housing-rate">
                            {rates.map((e, index) => (
                                <Rating key={index} color={parseInt(housing.rating) >= e ? "colored" : ""} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="housing-collapse">
                    <div className="collapse-description">
                        <Collapse title="Description" text={housing.description} />
                    </div>
                    <ul className="collapse-equipments">
                        <Collapse title="Équipements" text={housing.equipments.map((equipment, i) => (
                            <li key={i} className="list-equipments">{equipment}</li>
                        ))} />
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Logements;