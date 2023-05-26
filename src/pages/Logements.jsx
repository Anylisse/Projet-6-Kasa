import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import HousingTitle from "../components/HousingTitle";
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
            <Carousel pictures={housing.pictures}/>
            <HousingTitle title={housing.title} location={housing.location} />
            <Footer />
        </>
    )
}

export default Logements;