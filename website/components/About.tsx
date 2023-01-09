import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='sub-section w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest accent'>About</p>
                    <div className='flex justify-left'>
                        <h2 className='py-4'>Who am <span className='accent1'>I</span>?</h2>
                    </div>
                    <div >
                        <p className='py-2'>One Line Response</p>
                        <p className='py-2'>I am a junior CS, ECE, and Math major at the University of Wisconsin-Madison.</p>
                        <p className='py-2'>I am interested in systems design, low level, high speed, performant, and algorithmic code. I like to arrive at data driven conclusions and enforce best practices in common practice. Discovering insights from data and obtaining data from sight excites me.</p>
                        {/* <p className='py-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                        <p className='py-2'>Applications of theoretical concepts engage me. My goal as a triple major is to learn a breadth of theory, to facilitate elegant implementations of abstract solutions.</p>
                        {/* <p className='py-2 underline cursor-pointer'>Some Link</p> */}
                    </div>
                </div>
                {/* Image Card Highlight Effect */}
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
                    {/* Use Lazy Loading */}
                    {/* <img src="" alt="" /> */}
                    <Image className='rounded-xl' src={require("/public/assets/swamming.png")} alt="/" width={300} height={50} />
                </div>
            </div>
        </div>
    )
}

export default About