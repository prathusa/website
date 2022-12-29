import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest'>Some slogan</p>
                <h1 className='py-4'>
                    Hi, I'm <span className='accent'>Pratham</span>
                </h1>
                <h1 className='py-4'>
                    I'm a Software Engineer
                </h1>
                {/* <main>
        <h1>Pratham's Portfolio Site</h1>
        <p>WIP</p>
        <button>
          <a> Click Me </a>
        </button>
      </main> */}
            </div>
        </div>
    </div>
  )
}

export default Main