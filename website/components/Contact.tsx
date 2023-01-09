import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const icon_sz = 55;
    return (
        <div id='contact' className='sub-section w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto gap-8 px-2 justify-center'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest accent'>Contact</p>
                    <div className='flex justify-left'>
                        <h2 className='py-4'>Connect with <span className='accent1'>me</span></h2>
                    </div>
                    <div >
                        <p className='text-2xl sm:text-2xl md:text-3xl py-2'></p>
                    </div>
                </div>
                {/* Image Card Highlight Effect */}
                {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'> */}
                {/* Use Lazy Loading */}
                {/* <img src="" alt="" /> */}
                {/* <Image className='rounded-xl' src={require("/public/assets/me.png")} alt="/" width={300} height={50} /> */}
                {/* </div> */}
                <div className='flex justify-center w-full py-8 px-6'>
                    <Link href='https://linkedin.com/in/pratham-baid/'>
                        <div className='p-3 px-8 cursor-pointer hover:scale-105 ease-in duration-100'><FaLinkedin size={icon_sz} /></div>
                    </Link>
                    <Link href='https://github.com/prathusa'>
                        <div className='p-3 px-8 cursor-pointer hover:scale-105 ease-in duration-100'><FaGithub size={icon_sz} /></div>
                    </Link>
                    <Link href='mailto: prathbaid@gmail.com'>
                        <div className='p-3 px-8 cursor-pointer hover:scale-105 ease-in duration-100'><AiOutlineMail size={icon_sz} /></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact