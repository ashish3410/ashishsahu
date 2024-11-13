import React from 'react'
import { useNavigate } from 'react-router-dom'
function CurrencyConvertor() {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundImage: `url('src/assets/common-bg.svg')` }} className=' flex flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>Currency Converter</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                        This page contains the case study of Currency Converter Project which includes the  Project Overview, <br />Tools Used and Live Links to the official product.
                    </p>
                </div>
                <div className='mt-10'>
                    <button className='px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/CurrencyConvertor'>PROJECT LINK</a></button>
                </div>

            </section>

            <section className='mt-20 flex flex-col justify-center items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-center items-center'>
                        <img src="src/assets/currencyConverter.png" alt="photo" />
                    </div>

                    <div className='mt-20 lg:ml-20 ml-4 text-gray-600 '>
                        <h1 className='text-3xl font-bold text-black'>Project Overview</h1>
                        <p className='mt-10'>
                            This Currency Converter application, built with React, allows users to convert between different currencies quickly and accurately. It uses the ExchangeRate API to fetch real-time conversion rates, ensuring that users always get up-to-date information.
                        </p>
                        <h1 className='text-3xl font-bold mt-10 text-black'>Core Feature</h1>
                        <div className='mt-10'>
                           <span className='font-bold'> 1.Real-Time Conversion: </span> Select two currencies and input an amount to see the conversion instantly. <br />
                           <span className='font-bold'> 2.Swap Functionality:</span>A convenient swap button lets users instantly reverse the selected currencies for quick comparisons.
                            <br />
                            <span className='font-bold'>3.Dynamic User Interface: </span>The app provides a seamless, intuitive experience with responsive design for easy use on any device. <br />
                        </div>
                        <h1 className='text-3xl mt-10 font-bold text-black'>Technical Hightlight</h1>
                        <div className='mt-10 pr-2'>
                            <span className='font-bold'>1.ExchangeRate API Integration: </span>Fetches current exchange rates dynamically, ensuring accuracy and relevance.<br />
                            <span className='font-bold'>2.React Component Architecture: </span>Clean, reusable components streamline the app’s functionality and layout.<br />
                            <span className='font-bold'>3.Optimized State Management: </span> Efficient use of React’s state ensures fast, real-time updates without lag.
                        </div>

                        <h1 className='text-3xl mt-10 font-bold text-black' >Learning Outcomes</h1>
                        <p className='mt-10 pr-4'>
                            Through this project, I strengthened my skills in: <br />

                            1.API Integration: Implementing and managing external APIs within React. <br />
                            2.Interactive UI Design: Creating responsive, user-friendly interfaces with React. <br />
                            3.State Management: Managing complex data interactions and real-time updates.
                        </p>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>Tool Used</h1>
                        <div className='mt-10 flex flex-wrap gap-6'>
                            <p className=' flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>HTML</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Tailwind CSS</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>JavaScript</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>React</p>
                            {/* <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> Toolkit</p> */}
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>ExchangeRate API</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Github</p>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>See Live</h1>
                        <button className='px-10 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/CurrencyConvertor'>PROJECT LINK</a></button>
                        <button onClick={() => navigate('/projects')} className='border-violet-600 border border-b-4  px-16 py-3.5 ml-4 rounded-lg hover:-translate-y-1 duration-500'>GO BACK</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default CurrencyConvertor