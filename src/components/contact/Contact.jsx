import React , {useRef} from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_bdvrnjh', 'template_xekbxqi', form.current, 'j2syyMzIIcX6AfBEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        
    };
  return (
      <section id='contact'>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
              
              <div className="contact__options">
                  <article className="contact__option">
                      <AiOutlineMail className='contact_icon'/>
                   <h4>Email</h4>
                      <h5>divyag.ug16.ee@nitp.ac.in</h5>
                      <a href="mailto:divyag.ug16.ee@nitp.ac.in" target='_blank' rel='noreferrer'>Send a message</a>
                  </article> 
                  <article className="contact__option">
                      <BsWhatsapp className='contact_icon' />
                   <h4>WhatsApp</h4>
                      <h5>9334802030</h5>
                      <a href="https://api.whatsapp.com/send?phone=+919334802030" target='_blank' rel='noreferrer'>Send a message</a>
                  </article> 
              </div>
              {/* end of contact option  */}
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name='name' placeholder='Your Full Name' required />
                  <input type="email" name='email' placeholder='Your Email' required />
                  <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                  <button type="submit" className='btn btn-primary'>Send Message</button>
              </form>

          </div>
    </section>
  )
}

export default Contact