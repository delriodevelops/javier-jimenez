'use client'

import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '', country: '', phone: '', privacyPolicy: false, newsletter: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData(prevData => ({ ...prevData, [name]: type !== 'checkbox' ? value : checked }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!!formData.privacyPolicy) {
      setIsSubmitting(true)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', message: '', subject: '', country: '', phone: '', privacyPolicy: false, newsletter: false })
        } else {
          setSubmitStatus('error')
        }
      } catch (error) {
        setSubmitStatus('error')
      }
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gray-600 text-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center ">

          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll animate-fade-in-up">Contacto</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Para consultas personalizadas y asesoramiento de calidad, no dude en ponerse en contacto con nosotros.
          </p>
          <div className="glassmorphism p-8 rounded-xl">
            <form className="space-y-6 bg-gray-700 p-10 rounded-xl" onSubmit={handleSubmit}>
              <div className='flex lg:flex-row flex-col justify-between gap-6'>
                <div className="relative w-full">
                  <ion-icon name="person-outline" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre y apellidos"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-lg w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                    required
                  />
                </div>
                <div className="relative w-full">
                  <ion-icon name="at" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                    required
                  />
                </div>
              </div>
              <div className='flex lg:flex-row flex-col justify-between gap-6'>
                <div className="relative w-full">
                  <ion-icon name="pin" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
                  <input
                    type="text"
                    name="location"
                    placeholder="Ciudad y país"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full text-lg w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                    required
                  />
                </div>
                <div className="relative w-full">
                  <ion-icon name="call" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <ion-icon name="file-tray-full-outline" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></ion-icon>
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                  required
                />
              </div>
              <div className="relative">
                <ion-icon name="chatbubbles-outline" class="absolute left-3 top-4 text-gray-400 text-xl"></ion-icon>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full pl-10 pr-3 py-3 bg-gray-600 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300"
                  required
                ></textarea>
                <div className='flex gap-2 items-start mt-8 text-gray-200'>
                  <input
                    onChange={handleInputChange}
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    name="privacyPolicy"
                    className='mt-1'
                    required
                  />
                  <label htmlFor="privacyPolicy" onClick={() => { setFormData({ ...formData, privacyPolicy: !formData.privacyPolicy }) }} className='text-sm'>
                    Acepto los terminos de uso. Por favor, lea nuestro aviso de privacidad para entender como manejamos su información personal.
                  </label>
                </div>
                <div className='flex gap-2 items-start mt-2 text-gray-200'>
                  <input
                    onChange={handleInputChange}
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    className='mt-1'
                  />
                  <label htmlFor="newsletter" onClick={() => { setFormData({ ...formData, newsletter: !formData.newsletter }) }} className='text-sm'>Quiero recibir newsletter con información de interés.</label>
                </div>
              </div>
              <div className='flex gap-8 flex-col md:flex-row flex-col-reverse'>
                <a
                  href="https://api.whatsapp.com/send?phone=34622156543"
                  target='_blank'
                  rel="noopener noreferrer"
                  className='flex items-center justify-center gap-2 text-xl p-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 ease-in-out w-full md:w-1/2'
                >
                  <ion-icon name="logo-whatsapp" class="text-2xl"></ion-icon>
                  <span>+34 622 15 65 43</span>
                </a>
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-6 py-4 text-lg font-medium text-black bg-gradient-to-r from-gold-200 to-gold-300 rounded-lg transition-all duration-300 ease-in-out hover:from-gold-300 hover:to-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <ion-icon name="send-outline" class="mr-2 text-xl"></ion-icon>
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                <p className="text-green-400 text-center">¡Mensaje enviado con éxito!</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                <p className="text-red-400 text-center">Error al enviar el mensaje. Por favor, inténtelo de nuevo.</p>
              </div>
            )}
          </div>
          <a href="#blog" className="w-fit inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
            <ion-icon name="arrow-down-outline" class="mr-2"></ion-icon>
            Más sobre nosotros
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact