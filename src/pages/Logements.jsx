import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Header from "../components/Header";
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
            <Footer />
        </>
    )
}

export default Logements;