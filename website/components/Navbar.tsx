import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16'>
        <Image src="/../public/assets/me.png" alt="/" width={55} height={50} />
        <div className='flex justify-end px-2'>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='menu-bar'>Home</li>
            </Link>
            <Link href='/'>
              <li className='menu-bar'>About</li>
            </Link>
            <Link href='/'>
              <li className='menu-bar'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='menu-bar'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='menu-bar'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed md:hidden left-0 top-0 w-full h-screen bg-black/70' : ''}>
        {/* transitions from left (offscreen) to right where the bar is visible */}
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-700 p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/../public/assets/me.png" alt="/" width={45} height={50} />
              <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineClose size={30} />
              </div>
            </div>
            <div className='border-b border-[#FFFDD0] my-4 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>Pratham's Portfolio Pite</h1>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='flex flex-col items-center justify-center h-full uppercase'>
                <Link href='/'><li className='py-4 scale-110'> Home </li></Link>
                <Link href='/'><li className='py-4 scale-110'> About </li></Link>
                <Link href='/'><li className='py-4 scale-110'> Skills </li></Link>
                <Link href='/'><li className='py-4 scale-110'> Projects </li></Link>
                <Link href='/'><li className='py-4 scale-110'> Contact </li></Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#FFFDD0]'> Social Media </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><FaLinkedin size={30} /></div>
                  <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><FaGithub size={30} /></div>
                  <div className='p-3 cursor-pointer hover:scale-105 ease-in duration-100'><AiOutlineMail size={30} /></div>
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