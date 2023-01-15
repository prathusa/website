import React from 'react';
import Image from 'next/image';
import bg from '/public/assets/projects/md5_hash/md5_bg.png';
import img from '/public/assets/projects/md5_hash/MD5_algorithm.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';


const md5_hash = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='object-cover absolute z-1'
          fill
          src={bg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>MD5 Hash Cracker</h2>
          <h3>CUDA | C++</h3>
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
            width={300}
            alt='MD5 Bitwise Algorithm Diagram'
          />
          {/* </div> */}
          <p className='py-8'>
            The MD5 hash function is commonly used to verify the integrity of data, such as the integrity of downloaded files or messages
            transmitted over a network. However, the MD5 encryption scheme has been found to be vulnerable to a number of attacks and is
            no longer considered secure. This project aims to highlight the vulnerabilities of the MD5 encryption scheme by using a GPU
            (Graphics Processing Unit) to brute force it. The project involves creating a program that takes an MD5 hash value as input
            and uses a GPU to quickly try every possible combination of characters until it finds a match. The program could then be used
            to demonstrate the weakness of the MD5 encryption scheme by showing how quickly it can be broken using a brute-force attack.
            Overall, this project highlights the significance of using stronger and more secure encryption methods to protect sensitive data.
          </p>
          <a
            href='https://github.com/prathusa/MD5_Hash_Cracker'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          {/* <a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CUDA
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C++
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

export default md5_hash