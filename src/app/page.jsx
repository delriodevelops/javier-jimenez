'use client'
import Image from 'next/image'
import { useState } from 'react'
import Script from 'next/script'

export default function PremiumLawFirmLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const navItems = ["Inicio", "Sobre Mí", "Servicios", "Contacto"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-black">
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" noModule />
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gray-200 bg-white">
        <div className="flex items-center justify-center">
          <ion-icon name="scale" class="text-amber-700 text-3xl"></ion-icon>
          <span className="ml-2 text-2xl font-semibold text-gray-800">Bufete Javier Jiménez</span>
        </div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:bg-white bg-neutral-100  justify-between z-50 md:flex absolute md:relative top-20 md:top-0 left-0 right-0 flex-col md:flex-row items-center md:ml-auto bg-white md:bg-transparent p-4 md:p-0 border-b md:border-b-0 border-gray-200 md:space-y-0 space-y-4 md:space-x-6`}>
          {navItems.map((item) => (
            <a
              key={item}
              className="py-20 md:py-0 md:bg-white bg-neutral-100 w-full text-center md:w-fit text-lg md:text-md font-medium text-gray-600 duration-300 ease-in-out hover:text-amber-700 transition-colors rounded "
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="ml-auto md:hidden" onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
          <ion-icon name="menu" class="text-gray-600 text-2xl"></ion-icon>
        </button>
      </header>

      <main className="flex-1">
        <section id="inicio" className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFhMjAyYyI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgNDZMMjQgMzRMMzYgMjJNMjQgNDZMMzYgMzRMMjQgMjIiIHN0cm9rZT0iI2ZkZTY4YSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Excelencia Legal <span className="text-amber-400">Garantizada</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Defendemos sus derechos con experiencia, dedicación y un compromiso inquebrantable con la justicia.
              </p>
              <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
                <a href="#contacto" className="hover:scale-110 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 duration-300 ease-in-out hover:bg-amber-800">
                  <ion-icon name="call" class="mr-2"></ion-icon>
                  Consulta Gratuita
                </a>
                <a href="#servicios" className="hover:scale-110 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-400 bg-gray-800 duration-300 ease-in-out hover:bg-gray-700">
                  <ion-icon name="list" class="mr-2"></ion-icon>
                  Nuestros Servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="w-full py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/javier-jimenez-photo.png"
                  alt="Abogado"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sobre <span className="text-amber-700">Mí</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con más de 20 años de experiencia en el campo legal, me dedico a proporcionar asesoramiento jurídico
                  de calidad y representación efectiva para clientes distinguidos.
                </p>
                <ul className="space-y-2">
                  {[
                    "Doctorado en Derecho por la Universidad de Harvard",
                    "Especializado en Derecho Corporativo y Litigios Complejos",
                    "Reconocido por mi enfoque estratégico y resultados excepcionales",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <ion-icon name="checkmark-circle" class="text-amber-700 text-xl"></ion-icon>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="hover:scale-110 self-start mt-4 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 duration-300 ease-in-out hover:bg-amber-800">
                  <ion-icon name="calendar" class="mr-2"></ion-icon>
                  Agendar una Consulta
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-24 md:py-32 lg:py-40 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Servicios <span className="text-amber-700">Exclusivos</span>
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos una gama selecta de servicios legales diseñados para satisfacer las necesidades más exigentes.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: "business", title: "Derecho Corporativo", description: "Asesoramiento estratégico para empresas líderes." },
                { icon: "shield-checkmark", title: "Litigios Complejos", description: "Representación experta en casos de alto perfil." },
                { icon: "people", title: "Mediación Ejecutiva", description: "Resolución de conflictos para la élite empresarial." },
              ].map((service, index) => (
                <div key={index} className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl border-t-4 border-amber-700">
                  <ion-icon name={service.icon} class="text-amber-700 text-4xl self-center"></ion-icon>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                  <a href="#contacto" className="hover:scale-110 mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-700 bg-amber-100 duration-300 ease-in-out hover:bg-amber-200">
                    <ion-icon name="arrow-forward" class="mr-2"></ion-icon>
                    Más Información
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-24 md:py-32 lg:py-40 bg-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contacto
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Para consultas personalizadas y asesoramiento de calidad, no dude en ponerse en contacto con nosotros.
              </p>
            </div>
            <div className="mx-auto max-w-[600px] space-y-4 py-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <ion-icon name="person" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></ion-icon>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div className="relative">
                  <ion-icon name="mail" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></ion-icon>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <div className="relative">
                  <ion-icon name="chatbubbles" class="absolute left-3 top-3 text-gray-400"></ion-icon>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  ></textarea>
                </div>
                <div className='flex gap-8 flex-col-reverse md:flex-row'>
                  <a href="https://api.whatsapp.com/send?phone=34632814194" target='_blank' type='button' className='flex items-center gap-2 text-3xl p-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 hover:scale-110 duration-300 ease-in-out w-full justify-center'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <span className='text-base'>+34 632 814 194</span>
                  </a>
                  <button
                    type="submit"
                    className="hover:scale-110 w-full px-5 py-3 text-white bg-amber-700 rounded-md duration-300 ease-in-out hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center"
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
                        <ion-icon name="send" class="mr-2"></ion-icon>
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center mt-4">¡Mensaje enviado con éxito!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center mt-4">Error al enviar el mensaje. Por favor, inténtelo de nuevo.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">© 2024 Bufete Javier Jiménez. Todos los derechos reservados.</p>
            <nav className="flex gap-4">
              <a className="text-sm text-gray-500 duration-300 ease-in-out hover:text-amber-700 transition-colors flex items-center" href="#condiciones">
                <ion-icon name="document-text" class="mr-1"></ion-icon>
                Condiciones de Servicio
              </a>
              <a className="text-sm text-gray-500 duration-300 ease-in-out hover:text-amber-700 transition-colors flex items-center" href="#privacidad">
                <ion-icon name="lock-closed" class="mr-1"></ion-icon>
                Política de Privacidad
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}