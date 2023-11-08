import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>mjid.elouss@gmail.com</h5>
            <a href="mailto:mjid.elouss@gmail.com">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+212636934470</h5>
            <a href="https://api.whatsapp.com/send?phone=0636934470">Send a Message</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact