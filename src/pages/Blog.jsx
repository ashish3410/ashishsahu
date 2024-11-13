import React from 'react'
import { useNavigate } from 'react-router-dom'
function MegaBlog() {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundImage: `url('src/assets/common-bg.svg')` }} className=' flex flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>A Fullstack Blog Website</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl text-gray-600'>
                        This page contains the case study of Fullstack Website which includes the <br />  Project Overview,Tools Used and Live Links to the official product.
                    </p>
                </div>
                <div className='mt-10'>
                    <button className='px-20 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/MegaBlog'>PROJECT LINK</a></button>
                </div>

            </section>

            <section className='mt-20 flex flex-col justify-center items-center'>
                <div className='lg:w-1/2'>
                    <div className='flex justify-center items-center'>
                        <img src="src/assets/Blog.png" alt="photo" />
                    </div>

                    <div className='mt-20 lg:ml-20 ml-4 text-gray-600 '>
                        <h1 className='text-3xl font-bold text-black'>Project Overview</h1>
                        <p className='mt-10'>
                            This fully functional Blog Website provides a platform for users to create, share, and manage blog posts.
                            Built with React on the frontend and Appwrite as the backend service, this project includes a comprehensive
                            set of features for user interaction and content management.
                        </p>
                        <h1 className='text-3xl font-bold mt-10 text-black'>Core Feature</h1>
                        <div className='mt-10'>
                            <span className='font-bold'>1.User Authentication:   </span> Users can create accounts, log in, and log out securely.<br />
                            <span className='font-bold'> 2.Create and Manage Posts:</span>Logged-in users can create new blog posts with optional image uploads, view posts by other users, and update or delete their own posts.
                            <br />
                            <span className='font-bold'>3.Rich Text Editing:  </span>Powered by TinyMCE, the text editor allows users to format their blog posts for a polished presentation. <br />
                            <span className='font-bold'>4.Form Validation:   </span>The React Hook Form library is used for efficient and reliable form validation on login and signup pages. <br />
                        </div>
                        <h1 className='text-3xl mt-10 font-bold text-black'>Technical Hightlight</h1>
                        <div className='mt-10 pr-2'>
                            <span className='font-bold'>1.React & Appwrite Integration:  </span>The frontend interacts with Appwrite for seamless user authentication and data management.
                            <br />
                            <span className='font-bold'>2.Dynamic Content Rendering</span> Blog posts and images are dynamically displayed and update in real-time as users interact with the site.<br />
                            <span className='font-bold'>3.User-Friendly UI:</span>The interface is intuitive and responsive, allowing users to easily navigate between posts, create new content, and manage their profiles.
                        </div>

                        <h1 className='text-3xl mt-10 font-bold text-black' >Learning Outcomes</h1>
                        <div className='mt-10 pr-4'>
                        This project strengthened my skills in: <br />
                            <span className='font-bold'>1.Full-Stack Development: </span> Integrating a robust backend (Appwrite) with a React frontend. <br />
                            <span className='font-bold'>2.Data Handling and User Authentication: </span>Managing user accounts and permissions securely. <br />
                            <span className='font-bold'>3.Rich Text Editing and Form Validation:</span>Providing a high-quality user experience with TinyMCE and React Hook Form.
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>Tool Used</h1>
                        <div className='mt-10 flex flex-wrap gap-6'>
                            <p className='flex px-4 bg-gray-300 rounded-lg text-center justify-center items-center'>HTML</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Tailwind CSS</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>JavaScript</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>React</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>TinyMce</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Appwrite</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Use Hook Form</p>
                            <p className='px-4 py-2 bg-gray-300 rounded-lg text-center justify-center items-center'>Github</p>
                        </div>
                    </div>
                    <div className='lg:ml-20 ml-4'>
                        <h1 className='text-3xl text-black font-bold mt-10 text-left'>See Live</h1>
                        <button className='px-10 py-4 bg-violet-600 rounded-md text-white mt-10 mb-32 hover:bg-violet-700 hover:-translate-y-1 duration-500'><a href='https://github.com/ashish3410/React-Course/tree/main/MegaBlog'>PROJECT LINK</a></button>
                        <button onClick={() => navigate('/projects')} className='border-violet-600 border border-b-4  px-16 py-3.5 ml-4 rounded-lg hover:-translate-y-1 duration-500'>GO BACK</button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default MegaBlog