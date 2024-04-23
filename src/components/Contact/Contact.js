import React, { useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from "sweetalert2";
import { useContext } from 'react';
import { themeContext } from '../../Context';
export default function Contact() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

    const form = useRef();
   const [done,setDone]=useState(false)
    
  function SUCCESS(message) {
    Swal.fire({
      title: message,
      icon: "success",
    });
   
  }

  
  function Warningalert(errorMessage) {
    Swal.fire({
      title: errorMessage,
      icon: "warning",
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jkxeg7u', 'template_hofe0w2', form.current, {
        publicKey: 'a2qPzvpzRhjFWO5oj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setDone(true)
        //   SUCCESS("Message Sent Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          Warningalert("Somenthing Went Wrong")
        },
      );
  };
  return (
    <div className='contact-form'>
        <div className='w-left' >
            <div className='awesome'>
                <span style={{color:darkMode?'white' : ''}}>Get In Touch </span>
                <span>Contact Me</span>
                <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name' />
                <input type='email' name='user_email' className='user' placeholder='Email' />
                <textarea name='message'  className='user' placeholder='Message' />
                <input type='submit' value='send'  className='button' />
                <span style={{color:'var(--orange)'}}>{done && "Thanks for Contacting me!.."}</span>
                <div className='blur c-blur1' style={{background:'var(--purple)'}}>
                </div>
            </form>

        </div>
    </div>
  )
}
