import React from 'react'
import Image from 'next/image'
import Skill from './Skill'

const Skills = () => {
    return (
        <div id='skills' className='sub-section w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase accent'>
                    Skills
                </p>
                <h2 className='py-4'>What Can <span className='accent1'>I</span> Do?</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill
                        title='HTML'
                        img={require('/public/assets/skills/html.png')}
                    />
                    <Skill
                        title='CSS'
                        img={require('/public/assets/skills/css.png')}
                    />
                    <Skill
                        title='JavaScript'
                        img={require('/public/assets/skills/javascript.png')}
                    />
                    <Skill
                        title='React'
                        img={require('/public/assets/skills/react.png')}
                    />
                    <Skill
                        title='TailwindCSS'
                        img={require('/public/assets/skills/tailwind.png')}
                    />
                    <Skill
                        title='Firebase'
                        img={require('/public/assets/skills/firebase.png')}
                    />
                    <Skill
                        title='Github'
                        img={require('/public/assets/skills/github1.png')}
                    />
                    <Skill
                        title='Next.JS'
                        img={require('/public/assets/skills/nextjs.png')}
                    />
                    <Skill
                        title='AWS'
                        img={require('/public/assets/skills/aws.png')}
                    />
                    <Skill
                        title='C++'
                        img={require('/public/assets/skills/cpp.png')}
                    />
                    <Skill
                        title='Matlab'
                        img={require('/public/assets/skills/matlab.png')}
                    />
                    <Skill
                        title='Python'
                        img={require('/public/assets/skills/python.png')}
                    />
                    <Skill
                        title='Vim'
                        img={require('/public/assets/skills/vim.png')}
                    />
                    <Skill
                        title='Java'
                        img={require('/public/assets/skills/java.png')}
                    />
                    <Skill
                        title='JUnit'
                        img={require('/public/assets/skills/junit.png')}
                    />
                    <Skill
                        title='Power BI'
                        img={require('/public/assets/skills/power_bi.png')}
                    />
                    <Skill
                        title='C'
                        img={require('/public/assets/skills/c_lang.png')}
                    />
                    {/* <Skill
                        title='OpenMP'
                        img={require('/public/assets/skills/openmp.png')}
                    /> */}
                    <Skill
                        title='SQL'
                        img={require('/public/assets/skills/sql.png')}
                    />
                    <Skill
                        title='TypeScript'
                        img={require('/public/assets/skills/typescript.png')}
                    />
                    <Skill
                        title='CUDA'
                        img={require('/public/assets/skills/cuda.png')}
                    />
                    {/* <Skill
                        title='Next.JS'
                        img={require('/public/assets/skills/power_bi.png')}
                    />
                    <Skill
                        title='Next.JS'
                        img={require('/public/assets/skills/power_bi.png')}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Skills