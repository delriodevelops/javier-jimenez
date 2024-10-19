'use client'
import React, { useState } from 'react'

const Services = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section id="que-hacemos" className="py-24 relative overflow-hidden bg-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll">Qué Hacemos</h2>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll">
            <ion-icon class="text-gold-200 text-6xl" name="trending-up"></ion-icon>
            <h3 className="text-3xl font-semibold mb-6">Derecho Mercantil y Societario</h3>
            <ul className="grid lg:grid-cols-2 gap-4 text-gray-300">
              {
                [
                  "Aumentos/reducciones de capital", "Juntas de socios",
                  "Fusiones y adquisiciones", "Reestructuraciones empresariales",
                  "Constitución de empresas", "Redacción y revisión de estatutos sociales",
                  "Asesoria en gobierno corporativo", "Cumplimiento normativo (compliance)",
                  "Juntas generales y actas societarias", "Resolución extrajudicial de conflictos",
                  "Reclamación de deudas", "Pactos parasociales",
                ].map((item, index) => (
                  <li key={index} className="flex items-center animate-on-scroll col-span-2 md:col-span-1" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ion-icon name="checkmark-circle-outline" class="text-gold-400 mr-2"></ion-icon>
                    <span className='text-xl lg:text-2xl'>{item}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <ion-icon class="text-gold-200 text-6xl" name="finger-print"></ion-icon>
              <h3 className="text-3xl font-semibold mb-6">Protección de Datos</h3>
              <ul className="space-y-2 text-gray-300">
                {["Políticas de privacidad", "Cumplimiento RGPD", "Auditorías de seguridad"].map((item, index) => (
                  <li key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <ion-icon name="lock-closed-outline" class="text-gold-400 mr-2"></ion-icon>
                    <span className='text-xl lg:text-2xl'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <ion-icon class="text-gold-200 text-6xl" name="bulb-outline"></ion-icon>
              <h3 className="text-3xl font-semibold mb-6">Propiedad Intelectual</h3>
              <ul className="space-y-2 text-gray-300">
                {["Registro de marcas", "Patentes", "Derechos de autor"].map((item, index) => (
                  <li key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <ion-icon name="create-outline" class="text-gold-400 mr-2"></ion-icon>
                    <span className='text-xl lg:text-2xl'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-12 p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll relative">
            <ion-icon class="text-gold-200 text-6xl" name="file-tray-full-outline"></ion-icon>
            <h3 className="text-3xl font-semibold mb-6">Otros servicios</h3>
            {
              !isOpen
                ? (
                  <button onClick={() => { setIsOpen(p => !p) }} className='flex gap-2 w-full items-center bg-gray-600 justify-center py-4 rounded-xl'>
                    <ion-icon class="text-gray-100 text-2xl animate-bounce" name="chevron-down"></ion-icon>
                  </button>
                )
                : (
                  <>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-300">
                      {["Arbitraje", "Competencia", "Concursal", "Contratación comercial", "Financiación de proyectos", "Financiero y bancario", "Fiscal", "Inmobiliario", "Laboral", "Litigación civil derivada de conductas anticompetitivas", "Procesal civil", "Procesal penal", "Regulación financiera e inversiones alternativas", "Societario y gobierno corporativo", "Tecnologías de la información", "Urbanismo y medioambiente", "Energía"].map((item, index) => (
                        <li key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                          <ion-icon name="caret-forward-circle" class="text-gold-400 mr-2"></ion-icon>
                          <span className='text-xl lg:text-2xl'>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => { setIsOpen(p => !p) }} className='mt-16 flex gap-2 w-full items-center bg-gray-600 justify-center py-4 rounded-xl'>
                      <ion-icon class="text-gray-100 text-2xl" name="chevron-up"></ion-icon>
                    </button>
                  </>
                )
            }
          </div>
        </div>
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
            <ion-icon name="mail-outline" class="mr-2"></ion-icon>
            Solicita una Consulta
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services