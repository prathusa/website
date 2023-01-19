import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Project = ({title, bg, tech, url} : {title:string, bg:StaticImageData, tech:string, url:string}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-blue-400 rounded-xl group hover:bg-gradient-to-r from-emerald-400 to-blue-400'>
            <Image className='rounded-xl group-hover:opacity-10' src={bg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-center'>{tech}</p>
                <Link href={url}>
                    <p className='text-center py-3 rounded-lg bg-[#fffdde] text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default Project