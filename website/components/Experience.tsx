import React from 'react'
import Image from 'next/image'
import card from "/public/assets/construction.jpg"

const Experience = () => {
    return (
        <div id='experience' className='sub-section w-full md:h-screen p-2 flex items-center py-16'>
                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2'>
                    <div className='col-span-2'>
                        <p className='uppercase text-xl tracking-widest accent'>Experience</p>
                        <div className='flex justify-left'>
                            <h2 className='py-4'>Under <span className='accent1'>Construction</span>!</h2>
                        </div>
                        <div >
                            <p className='py-2'>One Line Response</p>
                            <p className='py-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className='py-2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='py-2 underline cursor-pointer'>Some Link</p>
                        </div>
                    </div>
                    {/* Image Card Highlight Effect */}
                    <div className='w-full h-auto m-auto shadow-xl shadow-blue-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
                        {/* Use Lazy Loading */}
                        {/* <img src="" alt="" /> */}
                        <Image className='rounded-xl' src={card} alt="/" width={300} height={50} />
                    </div>
                </div>
            </div>
      )
}

export default Experience