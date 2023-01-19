import React from 'react';
import Image from 'next/image';
import bg from '/public/assets/projects/prsort/pradix_bg.png';
import img from '/public/assets/projects/md5_hash/MD5_algorithm.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const pradix_sort = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] bg-black/70 z-10' />
        <Image
          className='object-cover absolute z-1'
          fill
          src={bg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
          <h2 className='py-2'>Parallelized Radix Sort</h2>
          <h3>C</h3>
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
            alt='Parallelized Radix Sort High Performance C Byte Sorting'
          />
          {/* </div> */}
          <p className='py-8'>
          Parallelized Radix Sort is a variation of the Radix Sort algorithm that utilizes multiple threads to perform the sorting process concurrently. This can greatly increase the speed of the sorting process, especially for large datasets.

In C, parallelized Radix Sort can be implemented using the pthread library, which allows for the creation and management of multiple threads. Each thread can be assigned a specific task, such as sorting a specific range of the input data. The threads can then communicate and synchronize with each other to ensure that the final result is correct.

One of the main benefits of using parallelized Radix Sort is that it can take advantage of the multiple cores present in modern CPUs to perform the sorting process much faster than the traditional sequential version of the algorithm. Additionally, it can also be beneficial when sorting large datasets because it can split the work across multiple threads, making it more efficient than a single-threaded implementation.

However, parallelized Radix Sort can be more complex to implement and debug than the sequential version, and it may also require more memory to store the intermediate results. Additionally, in some cases, the overhead of managing multiple threads may outweigh the performance benefits.
          </p>
          <a
            href='https://github.com/prathusa/prsort'
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
                <RiRadioButtonFill className='pr-1' /> C
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

export default pradix_sort