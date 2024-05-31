import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header/Header";
import Banner from "../components/Home2/Banner";
// import SolutionSection from "../components/Home2/SolutionSection";
import About from "../components/Home2/About";
import ProjectSection from "../components/Home2/ProjectSection";
import PeopleSection from "@/components/Home2/PeopleSection";
import ClientSection from "../components/Home2/ClientSection";
// import Brands from "../components/Home2/Brands"; // Not necessary 
import Contact from "../components/Home2/Contact";
import Footer2 from "../components/footer/Footer2";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "banner",
        // "solution",
        "about",
        "testimonial",
        "cover",
        "event",
        "project",
        "choose",
        "video",
        "client",
        "people",
        // "brands",
        "contact",
        "footer",
      ])),
    },
  };
}

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProjectSection />
      {/* <SolutionSection /> */}
      <About />
      <ClientSection />
      <PeopleSection/>
      {/* <Brands /> */}
      <Contact />
      <Footer2 />
    </>
  );
};

export default Home;
