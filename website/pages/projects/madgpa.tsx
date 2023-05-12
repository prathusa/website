import React from 'react';
import Image from 'next/image';
import banner from '/public/assets/projects/madgpa/banner.png';
import img from '/public/assets/projects/madgpa/MadGPA.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const madgpa = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] bg-black/70 z-10' />
        <Image
          className='object-fit absolute z-1'
          fill
          src={banner}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>MadGPA</h2>
          <h3>Javascript | Python | Firebase | Chrome API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          <Link href='/#projects' className='py-32'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
          <h2>Overview</h2>
          {/* <div className="mx-10"> */}
          <Image
            className='float-right p-8'
            src={img}
            width={430}
            alt='UW Madison Course Enrollment Extension'
          />
          {/* </div> */}
          <p className='py-8'>
          MadGPA is a powerful Chrome extension that enhances the official University of Wisconsin-Madison course enrollment website by overlaying key course distribution data. This valuable information helps students make informed decisions when balancing their course schedules and balancing academic rigor. With a 5-star rating on the Chrome store and an active user base of 200 daily users, MadGPA is a must-have tool for anyone seeking to excel in their studies at UW-Madison.
          </p>
          <a
            href='https://chrome.google.com/webstore/detail/madgpa/ngglfcpeciojeakbdenajcljcinejjpa'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Extension</button>
          </a>
          <a
            href='https://youtu.be/wgAfirEhvy4'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chrome API
              </p>
              {/* <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zillow API
              </p> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default madgpa
