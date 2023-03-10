import React from 'react'
import Image from 'next/image'
import Project from './Project'

import md5_hash from '/public/assets/projects/md5_hash/MD5 Brute Force Timings.png'
import madgpa from '/public/assets/projects/madgpa/MadGPA.png'
import prsort from '/public/assets/projects/prsort/benchmark.png'
import card from "/public/assets/construction.jpg"

const Projects = () => {
    // console.log('Projects loaded!')
    return (
        <div id='projects' className='sub-section w-full p-2 py-4'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='uppercase text-xl tracking-widest accent'>Projects</p>
                <div className='flex justify-left'>
                    <h2 className='py-4'><span className='accent1'>My</span> fun work</h2>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <Project
                        title='MD5 Hash Cracker'
                        bg={md5_hash}
                        url='/projects/md5_hash'
                        tech='CUDA C++ '
                    />
                    <Project
                        title="Pratham's Portfolio Pite"
                        bg={card}
                        // url='/property/'
                        url='https://github.com/prathusa/website'
                        tech='React Next.js TailwindCSS TypeScript'
                    />
                    <Project
                        title='MadGPA'
                        bg={madgpa}
                        url='/projects/madgpa'
                        tech='Javascript Chrome Extension'
                    />
                    <Project
                        title='Parallelized Radix Sort'
                        bg={prsort}
                        url='/projects/pradix_sort'
                        tech='C'
                    />
                    <Project
                        title='Zoom Scheduler'
                        bg={card}
                        url='/projects/zoom_bot'
                        tech='React JS'
                    />
                    <Project
                        title='Property Finder'
                        bg={card}
                        url='/property'
                        tech='React JS'
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects