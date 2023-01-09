import React from 'react'
import Image from 'next/image'
import Project from './Project'

const Projects = () => {
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
                        bg={require('/public/assets/me.png')}
                        url='/projects/md5_hash'
                        tech='CUDA C++ '
                    />
                    <Project
                        title='MadGPA'
                        bg={require('/public/assets/me.png')}
                        url='/projects/madgpa'
                        tech='Javascript Chrome Extension'
                    />
                    <Project
                        title='Parallelized Radix Sort'
                        bg={require('/public/assets/me.png')}
                        url='/projects/pradix_sort'
                        tech='C'
                    />
                    <Project
                        title='Zoom Scheduler'
                        bg={require('/public/assets/me.png')}
                        url='/projects/zoom_bot'
                        tech='React JS'
                    />
                    <Project
                        title='Property Finder'
                        bg={require('/public/assets/me.png')}
                        url='/property'
                        tech='React JS'
                    />
                    <Project
                        title='Property Finder'
                        bg={require('/public/assets/me.png')}
                        url='/property'
                        tech='React JS'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Projects