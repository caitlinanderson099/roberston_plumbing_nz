import React, { useRef } from 'react'
import PageHeader from '../components/PageHeader'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',     // replace with EmailJS service ID
        'YOUR_TEMPLATE_ID',    // replace with EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY'      // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text)
          alert('Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          console.error('Error:', error.text)
          alert('Something went wrong, please try again later.')
        }
      )
  }

  return (
    <div className="contact-page">
      <PageHeader 
        title="Contact Us" 
        backgroundImage="/about-bg.webp" 
      />

      <div className="contact-section">
            <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <label>First Name <span>*</span></label>
          <input type="text" name="user_firstname" required />

          <label>Last Name <span>*</span></label>
          <input type="text" name="user_lastname" required />

          <label>Contact Email <span>*</span></label>
          <input type="email" name="user_email" required />

          <label>Contact Number <span>*</span></label>
          <input type="number" name="user_number" required />

          <label>Address (optional)</label>
          <input type="text" name="user_address" />

          <label>What service are you looking for? <span>*</span></label>
          <select name="service" required>
            <option value="">-- Select a Service --</option>
            <option value="job_quoting">Job Quoting</option>
            <option value="plumbing">Plumbing</option>
            <option value="emergency">Emergency / After Hours Plumbing</option>
            <option value="drainlaying">Drainlaying</option>
            <option value="central_heating">Central Heating</option>
            <option value="other">Other</option>
          </select>

          <label>How did you hear about us? (optional)</label>
          <input type="text" name="referral_source" />

          <label>Message <span>*</span></label>
          <textarea name="user_message" required />

          <button type="submit">Send</button>
        </form>
      </div>
      </div>

      
    </div>
  )
}

export default Contact
