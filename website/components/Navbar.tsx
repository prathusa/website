import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useRouter } from 'next/router'
// import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#1e1e1e');
  const [linkColor, setLinkColor] = useState('#FFFDD0');

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //       setNavBg('#111827');
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleShadow);
  // }, []);

  // const [nav, setNav] = useState(false)
  // const [shadow, setShadow] = useState(false)
  // const [navBg, setNavBg] = useState('#111827')
  // const [linkColor, setLinkColor] = useState('#FFFDD0')
  // const router = useRouter()

  // // useEffect(() => {
  // //   if (router.asPath === '/' && false) {
  // //     setNavBg('gray-900')
  // //     setLinkColor('#FFFDD0')
  // //   } else {
  // //     // setNavBg('#60a5fa')
  // //     // setLinkColor('#FFFDD0')
  // //   }
  // // }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  const handleScroll = (event: any) => {
    // use query selector to get body element
    setShadow(true)
    setNavBg('#709dff')
  }
  useEffect(
    () => {
      document.addEventListener('wheel', handleScroll);
      return () => document.removeEventListener('wheel', handleScroll)
    }
  )


  return (
    // style={{ backgroundColor: `${navBg}` }}
    <div style={{ backgroundColor: `${navBg}` }} className={'fixed w-full h-20 z-[100]' + (shadow ? ' shadow-md shadow-gray-600' : '')}>
      <div className={'flex justify-between items-center w-full h-full px-3 2xl:px-16' + (shadow ? ' bg-gradient-to-r from-emerald-400 to-blue-400 background-animate' : '')}>
        <Link href='/#home'>
          <Image src={require("/public/assets/me.png")} alt="/" width={55} height={50} />
        </Link>
        <div className='flex justify-end px-2'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/#home'>
              <li className='menu-bar'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='menu-bar'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='menu-bar'>Skills</li>
            </Link>
            <Link href='/#experience'>
              <li className='menu-bar'>Experience</li>
            </Link>
            <Link href='/#projects'>
              <li className='menu-bar'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='menu-bar'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      {/* onclick hides closes navbar when user clicks off of the sidebar (when parent is clicked but child is not then hide bar) */}
      <div className={nav ? 'fixed md:hidden left-0 top-0 w-full h-screen bg-black/70' : ''} onClick={(event) => { if (event.target === event.currentTarget) setNav(false) }}>
        {/* transitions from left (offscreen) to right where the bar is visible */}
        <div className={'flex flex-col ' + (nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-700' : 'fixed left-[-100%] top-0') + ' p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={require("/public/assets/me.png")} alt="/" width={45} height={50} />
              <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineClose size={30} />
              </div>
            </div>
            <div className='border-b border-[#FFFDD0] my-4 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>Pratham's Portfolio Pite</h1>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='flex flex-col items-center justify-center h-full uppercase'>
                <Link href='/#home'><li onClick={() => setNav(false)} className='py-4 scale-110'> Home </li></Link>
                <Link href='/#about'><li onClick={() => setNav(false)} className='py-4 scale-110'> About </li></Link>
                <Link href='/#skills'><li onClick={() => setNav(false)} className='py-4 scale-110'> Skills </li></Link>
                <Link href='/#experience'><li onClick={() => setNav(false)} className='py-4 scale-110'> Experience </li></Link>
                <Link href='/#projects'><li onClick={() => setNav(false)} className='py-4 scale-110'> Projects </li></Link>
                <Link href='/#contact'><li onClick={() => setNav(false)} className='py-4 scale-110'> Contact </li></Link>
              </ul>
              <div className='inset-x-0 bottom-0'>
                <p className='uppercase tracking-widest'> Social Media </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <Link href='https://linkedin.com/in/pratham-baid/'>
                    <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><FaLinkedin size={30} /></div>
                  </Link>
                  <Link href='https://github.com/prathusa'>
                    <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><FaGithub size={30} /></div>
                  </Link>
                  <Link href='mailto: prathbaid@gmail.com'>
                    <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><AiOutlineMail size={30} /></div>
                  </Link>
                  {/* <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><BsFillPersonLinesFill size={30} /></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar