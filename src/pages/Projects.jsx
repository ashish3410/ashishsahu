
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
function Projects() {
    const navigate = useNavigate();
    const gotoContact=()=>{
        navigate('/contact')
    }
    return (
        <>
        <section style={{ backgroundImage: `url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')` }} className='flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>PROJECTS</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                    Here you will find some of the personal and client projects that I created. <br /> Each project includes its own case study.
                    </p>
                </div>
                <div>
                    <Button handleClick={gotoContact} label="CONTACT"/>
                </div>
            </section>
        <section style={{ fontFamily: 'inherit' }} className="bg-gray-100 py-12">
            {/* Project Cards */}
            <div className="mt-16 space-y-20 px-4 md:px-0">
                {/* Todo App Project */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img className="h-52 lg:h-80" src=".src/assets/Todo.png" alt="Todo Web App" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-gray-600 text-center lg:text-left lg:px-16">
                        <h2 className="text-2xl font-bold text-black">Todo Web Apps with Context API & Redux Toolkit</h2>
                        <p className="mt-4">
                            Developed two Todo web applications to explore state management in React:
                        </p>
                        <ul className="mt-2 pl-6 text-left list-disc">
                            <li>One using Context API and another with React Redux Toolkit.</li>
                            <li>Core features include task addition, editing, saving, removal, marking tasks as completed, and persistent local storage to save tasks across sessions.</li>
                        </ul>
                        <p className="mt-4">
                            This project highlights my ability to implement key React concepts and manage state effectively, demonstrating flexibility in using different tools to achieve similar functionality.
                        </p>
                        <button onClick={()=>navigate('/project-1')} className="inline-block px-6 py-2 mt-4 bg-violet-600 rounded-lg text-white">See Project</button>
                    </div>
                </div>

                {/* Currency Converter Project */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10 ">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img className="h-52 lg:h-80" src="src/assets/currencyConverter.png" alt="Currency Converter" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-gray-600 text-center lg:text-left lg:lg:px-16">
                        <h2 className="text-2xl text-black font-bold">Currency Converter Application</h2>
                        <p className="mt-4">
                            Developed a responsive Currency Converter using React, integrated with an exchange rate API for real-time conversion rates. Users can select currencies, input amounts, and instantly view conversions. This project demonstrates my skills in API integration, state management, and building interactive user interfaces in React.
                        </p>
                        <button onClick={()=>navigate('/project-2')} className="inline-block px-6 py-2 mt-4 bg-violet-600 rounded-lg text-white">See Project</button>
                    </div>
                </div>

                {/* Tic Tac Toe Project */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img className="h-52 lg:h-80" src="src/assets/TicTacToe.png" alt="Tic Tac Toe Game" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-gray-600 text-center lg:text-left lg:px-16">
                        <h2 className="text-2xl text-black font-bold">Tic Tac Toe Game</h2>
                        <p className="mt-4">
                            Created an interactive Tic Tac Toe game using React, complete with responsive design and intuitive gameplay. The app tracks players' moves, detects winning combinations, and displays the game outcome. This project showcases my understanding of React component architecture and state management, as well as creating a seamless user experience in a classic game format.
                        </p>
                        <button onClick={()=>navigate('/project-3')} className="inline-block px-6 py-2 mt-4 bg-violet-600 rounded-lg text-white">See Project</button>
                    </div>
                </div>

                {/* Blog App Project */}
                <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img className="h-52 lg:h-80" src="src/assets/Blog.png" alt="Blog Application" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-gray-600 text-center lg:text-left lg:px-16">
                        <h2 className="text-2xl text-black font-bold">Blog Application with User Authentication and Rich Text Editor</h2>
                        <p className="mt-4">
                            Built a dynamic Blog Application where users can register, log in, create blog posts with images, update their content, and view posts by other users.
                        </p>
                        <ul className="mt-2 pl-6 text-left list-disc">
                            <li>User Authentication with login and signup powered by Appwrite</li>
                            <li>TinyMCE as the rich text editor for seamless blog writing and formatting</li>
                            <li>React Hook Form for efficient and validated login/signup processes</li>
                        </ul>
                        <p className="mt-4">
                            This project showcases a comprehensive set of front-end and back-end integrations, creating a smooth, fully functional blogging experience for users.
                        </p>
                        <button onClick={()=>navigate('/project-4')} className="inline-block px-6 py-2 mt-4 bg-violet-600 rounded-lg text-white">See Project</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Projects;
