import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundImage: `url('https://i.ibb.co/MS8ZFKK/portfolio-Bg.png')` }} className=' flex flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>TIC TAC TOE GAME</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                        This page contains the case study of tic tac toe game which includes the  Project Overview, <br />Tools Used and Live Links to the official product.
                    </p>
                </div>
                <div className='mt-10'>
                    <button className='px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/TicTacToe'>PROJECT LINK</a></button>
                </div>

            </section>

            <section className='mt-20 flex flex-col justify-center items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/x6Dtx8s/Tic-Tac-Toe.png" alt="Todo" />
                    </div>

                    <div className='mt-20 lg:ml-20 ml-4 text-gray-600 '>
                        <h1 className='text-3xl font-bold text-black'>Project Overview</h1>
                        <p className='mt-10'>
                            This classic Tic Tac Toe Game brings a familiar game into a digital format with an interactive,
                            responsive design. Built entirely in React, it’s designed for seamless gameplay and a clean user experience.
                            Perfect for testing strategic thinking, the game provides players with a fun, interactive environment to compete against friends or test their own skills.
                        </p>
                        <h1 className='text-3xl font-bold mt-10 text-black'>Core Feature</h1>
                        <p className='mt-10'>

                            1.Real-Time Game Updates: Players can place their moves in real-time, and the game board updates immediately. <br />
                            2.Win Detection & Game Reset: Detects winning combinations and highlights them. When the game concludes, players have the option to restart for a new game. <br />
                            3.Responsive Design: The game adjusts seamlessly across devices for an engaging experience on mobile, tablet, or desktop.
                        </p>
                        <h1 className='text-3xl mt-10 font-bold text-black'>Technical Hightlight</h1>
                        <div className='mt-10 pr-2'>
                            <span className='font-bold'>1.React Component Structure:  </span>Leveraging React’s component-based structure for efficient rendering and state management.<br />

                            <span className='font-bold'>2.State Management: </span>Uses React’s local state to manage the game board and track moves in real-time.<br />
                            <span className='font-bold'>3.Game Logic Implementation: </span>Custom logic built to detect wins, draws, and handle game resets smoothly.
                        </div>

                        <h1 className='text-3xl mt-10 font-bold text-black' >Learning Outcomes</h1>
                        <p className='mt-10 pr-4'>
                            Developing this game allowed me to: <br />

                            1.Deepen my understanding of React fundamentals.
                            2.Practice building interactive UIs and handling conditional rendering.
                            3.Implement game logic and manage dynamic state changes.

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
                            {/* <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> </p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'> </p> */}
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Github</p>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>See Live</h1>
                        <button className='px-10 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/TicTacToe'>PROJECT LINK</a></button>
                        <button onClick={() => navigate('/projects')} className='border-violet-600 border border-b-4  px-16 py-3.5 ml-4 rounded-lg hover:-translate-y-1 duration-500'>GO BACK</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Home
