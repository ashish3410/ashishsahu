import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
function About() {
    const navigate=useNavigate()
    const gotoProjects=()=>{
        navigate('/projects')
    }
    return (
        <>
        <section style={{ backgroundImage: `url('src/assets/common-bg.svg')` }} className='flex-col justify-center text-center h-full pt-48 z-10'>
        <div>
            <h1 className='text-5xl font-bold p-4'>ABOUT ME</h1>
        </div>
        <div className='p-4'>
            <p className='text-xl'>
            Here you will find more information about me,
                    what i do, and my current skills mostly <br />
                    in terms of programming and technology
            </p>
        </div>
        <div>
            <Button handleClick={gotoProjects} label="PROJECTS"/>
        </div>
    </section>
        <section className='w-full bg-gray-100 pt-10 pb-10'>
            <div className='text-center mt-10'>
                <p className='text-xl text-gray-600 px-4'>
                   
                </p>
            </div>
            <div className='w-full flex flex-wrap'>
                <div className='mt-20 w-full px-4 lg:px-20 sm:w-full lg:w-1/2 lg:text-left'>
                    <h1 className='text-3xl font-bold '>Get to know me!</h1>
                    <h1 className='mt-16 text-gray-600'>
                        I'm a <span className='font-bold'>Full stack Focused Web Developer</span> building and managing the
                        Websites and Web Applications that leads to the success
                        of the overall product. Check out some of my work in the <span className='font-bold'>Projects</span> section.
                        <br />{" "}
                        I also like sharing content related to the stuff that I have learned over
                        the years in <span className='font-bold'> Web Development</span> and <span className='font-bold'>Python Programming</span> so it can help other people of the Dev Community.
                        Feel free to Connect or Follow me on my <a href='https://www.linkedin.com/in/ashish-kumar-sahu-2a3a33289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='font-bold text-violet-600 underline'>Linkedin</a> and <a href={'https://www.instagram.com/code_with_python12/'} className='font-bold text-violet-600 underline'>Instagram</a> where I post useful
                        content related to Web Development and Programming

                        I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow.
                        If you have a good opportunity that matches my skills and experience then
                        don't hesitate to <span className='font-bold'>contact</span> me.
                    </h1>
                </div>
                <div className='mt-20 lg:w-1/2 sm:w-full px-4 lg:px-20'>
                    <h1 className='text-3xl font-bold'>My Skills</h1>

                    <div className='mt-10 flex flex-wrap gap-6'>
                        <p className=' flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>HTML</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Tailwind CSS</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>JavaScript</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>React</p>
                    {/* </div>
                    <div className='mt-10 flex flex-wrap gap-6'> */}
                        <p className=' flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>C Programming</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Python</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Django</p>
                        <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Bootstrap</p>
                    </div>
                </div>

            </div>

            <Button handleClick={gotoProjects} className='ml-4 lg:ml-20' label="CONTACT"/>
        </section>
        </>
    )
}

export default About