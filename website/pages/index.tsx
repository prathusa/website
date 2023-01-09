import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About'
import Experience from '../components/Experience';
// const About = React.lazy(() => import('../components/About'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Pite</title>
        <meta name="description" content="Pratham's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='snap-mandatory snap-y h-screen overflow-scroll overflow-x-hidden'> */}
      {/* <div className='w-full
    h-screen
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate'></div> */}
      <div className='snap-mandatory snap-y h-screen overflow-x-hidden no-scrollbar scroll-py-8'> 
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
