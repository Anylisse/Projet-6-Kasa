import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import HousingTitle from "../components/HousingTitle";
import HousingHost from "../components/HousingHost";
import Tag from "../components/Tag";
import "../styles/Logements.css";
import Footer from "../components/Footer";
import Error404 from "../pages/Error404";

function Logements() {
    const {id} = useParams();
    const housing = data.find((housing) => housing.id === id)

    if (!housing) {
        return <Error404/>
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
            <HousingHost hostPicture={housing.host.picture} hostName={housing.host.name} />
        </div>
        </main>
            <Footer />
        </>
    )
}

export default Logements;