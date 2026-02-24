import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

  // Replace with your actual contact information
  const whatsappNumber = '1234567890' // Format: country code + number without + or spaces
  const emailAddress = 'contact@angelin.com'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text">
          Get in Touch
        </h2>
        <p className="text-center text-text-light text-lg mb-12">
          Contact us today to learn more about our services
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
          <div className="flex flex-col gap-8">
            <div>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-bg border border-border rounded-lg no-underline text-text transition-all hover:border-[#25d366] hover:translate-x-1 hover:bg-[#25d366] hover:text-white"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
            <div>
              <a 
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 p-6 bg-bg border border-border rounded-lg no-underline text-text transition-all hover:border-primary hover:translate-x-1 hover:bg-primary hover:text-white"
              >
                <span className="text-2xl">✉️</span>
                <span>{emailAddress}</span>
              </a>
            </div>
          </div>

          <form className="lg:col-span-2 bg-bg p-10 rounded-xl border border-border" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium text-text">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3.5 px-3.5 border border-border rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium text-text">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3.5 px-3.5 border border-border rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-medium text-text">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-3.5 px-3.5 border border-border rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-text">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-3.5 px-3.5 border border-border rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-primary resize-none"
                required
              ></textarea>
            </div>
            {status.message && (
              <div className={`p-4 rounded-lg mb-6 text-sm ${
                status.type === 'success' 
                  ? 'bg-success/10 text-success border border-success' 
                  : 'bg-error/10 text-error border border-error'
              }`}>
                {status.message}
              </div>
            )}
            <button type="submit" className="px-8 py-3.5 text-base font-semibold rounded-lg cursor-pointer transition-all bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

