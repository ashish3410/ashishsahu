import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
function Home() {
    const navigate=useNavigate()

    const gotoAboutme=()=>{
        navigate('/about')
    }
    return (
        <>
            <section style={{ backgroundImage: `url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')` }} className='flex-col justify-center text-center h-full pt-48 z-10'>
                <div>
                    <h1 className='text-5xl font-bold p-4'>HEY, I'M ASHISH KUMAR SAHU</h1>
                </div>
                <div className='p-4'>
                    <p className='text-xl'>
                        A Passinate Web Developer building and managing Website and Web
                        <br />Applications thats leads to the success of the overall products
                    </p>
                </div>
                <div>
                    <Button handleClick={gotoAboutme} label="ABOUT ME"/>
                </div>
            </section>
        
        </>
    )
}

export default Home