import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Port from "../components/Port";

const Home = () => {
  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
