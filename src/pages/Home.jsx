import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import banner from "../assets/homeImg.webp";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" src={banner} alt="Bannière accueil"/>
            <Footer />
        </div>
    );
}

export default Home;