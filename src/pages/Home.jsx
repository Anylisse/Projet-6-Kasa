import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerHome from "../assets/homeImg.webp";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/Error404.css";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner src={bannerHome} title="Chez vous, partout et ailleurs" alt="Bannière accueil" />
                <Gallery />
            </main>
            <Footer />
        </>
    )
}

export default Home;