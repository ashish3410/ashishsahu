import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundImage: `url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')` }} className=' flex flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>TODO USING REACT TOOLKIT</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                        This page contains the case study of Todo Project which includes the  Project Overview, <br />Tools Used and Live Links to the official product.
                    </p>
                </div>
                <div className='mt-10'>
                    <button className='px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/TodoContextAndLocalStorage'>PROJECT LINK</a></button>
                </div>

            </section>

            <section className='mt-20 flex flex-col justify-center items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-center items-center'>
                        <img src="https://github.com/ashish3410/ashishsahu/blob/main/src/assets/Todo.png" alt="Todo" />
                    </div>

                    <div className='mt-20 lg:ml-20 ml-4 text-gray-600 '>
                        <h1 className='text-3xl font-bold text-black'>Project Overview</h1>
                        <p className='mt-10'>
                            This project features two fully functional Todo applications, each designed with a unique state management approach:
                            <br />
                            1.One uses <span className='font-semibold'>React's Context API</span><br />
                            2.The other is built with <span className='font-semibold'>Redux Toolkit</span>
                        </p>
                        <h1 className='text-3xl font-bold mt-10 text-black'>Core Feature</h1>
                        <p className='mt-10'>Both Todo apps offer a complete set of features to manage daily tasks efficiently: <br />

                            1.Task Management: Users can add new tasks easily. <br />
                            2.Edit & Save: Mistakes while adding tasks can be corrected, and tasks can be updated anytime. <br />
                            3.Task Removal: Delete tasks when they are no longer needed. <br />
                            4.Mark as Completed: Tasks can be checked off as they’re completed. <br />
                            5.Persistent Storage: Local storage support ensures tasks are saved even after a page refresh or browser restart.
                        </p>
                        <h1 className='text-3xl mt-10 font-bold text-black'>Technical Hightlight</h1>
                        <div className='mt-10 pr-2'>
                            <span className='font-bold'>1.React Context API & Redux Toolkit: </span>These apps showcase two different approaches to managing global state in React, offering a side-by-side comparison. <br />

                            <span className='font-bold'>2.Local Storage Integration: </span>Provides a seamless user experience by retaining tasks across sessions. <br />
                            <span className='font-bold'>3.Reusable Components: </span>The Todo items and task controls are created as reusable components for scalability and ease of maintenance.
                        </div>

                        <h1 className='text-3xl mt-10 font-bold text-black' >Learning Outcomes</h1>
                        <p className='mt-10 pr-4'>
                            Building this project enhanced my understanding of: <br />

                            1.State management in React, both with Context API and Redux Toolkit. <br />
                            2.Persistent local storage and data management in client-side applications. <br />
                            3.Component reuse and structuring an app for flexibility and maintenance.

                        </p>
                        <p>Feel free to add screenshots or visuals of each app to make the page more engaging!</p>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>Tool Used</h1>
                        <div className='mt-10 flex flex-wrap gap-6'>
                            <p className=' flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>HTML</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Tailwind CSS</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>JavaScript</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>React</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> Toolkit</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> Local Storage</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Github</p>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>See Live</h1>
                        <button className='px-10 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/TodoContextAndLocalStorage'>PROJECT LINK</a></button>
                        <button onClick={() => navigate('/projects')} className='border-violet-600 border border-b-4  px-16 py-3.5 ml-4 rounded-lg hover:-translate-y-1 duration-500'>GO BACK</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home
