import React from 'react'
import Typed from 'react-typed'

const Main = () => {
  return (
    <div id='main' className='snap-start scroll-my-6 w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* <p className='uppercase text-sm tracking-widest'>Some slogan</p> */}
          <h1 className='py-4'>
            Hi, I'm <span className='accent1'>Pratham</span>
          </h1>
          <div className='flex justify-center'>
            <h1 className='py-4'>
              I'm a<span> </span>
            <Typed
              className='accent'
              strings={['Developer', 'Student', 'Learner']}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main