import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import About from "../components/About";
// import Experience from "../components/Experience";
// const About = React.lazy(() => import('../components/About'));
const About = dynamic(() => import("../components/About"));
const Skills = dynamic(() => import("../components/Skills"));
const Experience = dynamic(() => import("../components/Experience"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {

  return (
    <>
      <Head>
        <title>Pratham's Portfolio Pite</title>
        <meta name="description" content="Pratham's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="snap-mandatory snap-y h-screen overflow-x-hidden no-scrollbar">
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
