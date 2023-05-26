import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import banner from "../assets/homeImg.webp";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/Error404.css";

function Home() {
    return (
        <>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" src={banner} alt="Bannière accueil"/>
            <Gallery />
            <Footer />
        </>
    )
}

export default Home;