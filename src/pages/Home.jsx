import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../styles/Error404.css";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home;