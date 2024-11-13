import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import config from '../config/config';

function ContactMe() {
    const form=useRef()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm(config.serviceId,config.templateId,form.current,config.publicKey)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
        console.log(form.current)
        setName('')
        setEmail('')
        setMessage('')
        alert(`Hello ${name},Thanks for contacting me!`)
    }
    return (
        <section style={{backgroundImage:`url('src/assets/common-bg.svg') `}}>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold">CONTACT</h1>
                <div className="h-2 w-8 rounded-lg mt-4 bg-violet-600"></div>
            </div>
            
            {/* Intro Text */}
            <div className="text-center mt-6 px-4 md:px-0">
                <p className="text-xl text-gray-600">
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
            </div>
            <div className='flex justify-center mt-20 p-4'>
            <div className=' w-full lg:w-3/5 h-4/5 bg-gray-100 p-10 rounded-lg shadow-2xl mb-10'>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className=''>
                        <label className='block'>Name</label>
                        <input onChange={(e)=>setName(e.target.value)} value={name} name='user_name' className='w-full mt-4 h-12 rounded-md px-4' type="text" placeholder='Enter your name'/>
                    </div>
                    <div className=''>
                        <label className='block'>Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} name='user_email' className='w-full mt-4 h-12 rounded-md px-4' type="email" placeholder='Enter your email' />
                    </div>
                    <div className=''>
                        <label className='block'>Message</label>
                        <textarea onChange={(e)=>setMessage(e.target.value)} value={message} name='message' className='w-full mt-4 h-72 rounded-md px-4' type="text-area" placeholder="Enter your Message" />
                    </div>
                    <div className='flex justify-center'>
                    <input type='submit' value='Submit' className='mt-8 bg-violet-600 py-3 px-10 rounded-lg'/>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default ContactMe