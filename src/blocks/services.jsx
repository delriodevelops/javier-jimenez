'use client'
import React, { useState } from 'react'

const Services = () => {
  const [isOpen, setIsOpen] = useState(false)

  const services = {
    mercantil: [
      {
        title: "Aumentos y Reducciones de Capital",
        description: "Asesoramiento y gestión en la modificación del capital social de la empresa."
      },
      {
        title: "Asesoría en Gobierno Corporativo",
        description: "Asistencia en la implementación de buenas prácticas y estructuras de gobernanza en las empresas."
      },
      {
        title: "Cumplimiento Normativo (Compliance)",
        description: "Evaluación y establecimiento de políticas de cumplimiento normativo para prevenir riesgos legales."
      },
      {
        title: "Constitución de Empresas",
        description: "Asesoramiento en la creación y registro de diversas formas jurídicas de empresas."
      },
      {
        title: "Fusiones y Adquisiciones",
        description: "Asesoría integral en procesos de fusión y compra/venta de empresas."
      },
      {
        title: "Juntas de Socios y Generales",
        description: "Organización y asistencia en reuniones de socios y juntas generales, incluyendo la redacción de actas."
      },
      {
        title: "Pactos Parasociales",
        description: "Elaboración y revisión de acuerdos entre socios para regular la relación y derechos entre ellos."
      },
      {
        title: "Reclamación de Deudas",
        description: "Asesoramiento y gestión en la recuperación de deudas impagadas."
      },
      {
        title: "Reestructuraciones Empresariales",
        description: "Asistencia en la reestructuración de la empresa para mejorar su funcionamiento y rentabilidad."
      },
      {
        title: "Resolución Extrajudicial de Conflictos",
        description: "Mediación y negociación para la resolución de disputas sin necesidad de recurrir a los tribunales."
      },
      {
        title: "Redacción y Revisión de Estatutos Sociales",
        description: "Elaboración y análisis de los estatutos que regulan el funcionamiento interno de la empresa."
      }
    ],
    proteccionDatos: [
      {
        title: "Auditorías de Seguridad",
        description: "Evaluación y análisis de los sistemas de información y protocolos de seguridad para garantizar la protección de datos."
      },
      {
        title: "Cumplimiento del RGPD",
        description: "Asesoramiento y establecimiento de procedimientos para asegurar el cumplimiento del Reglamento General de Protección de Datos."
      },
      {
        title: "Atención a Consultas de la AEPD",
        description: "Respuesta y gestión de las solicitudes y requerimientos de información por parte de la Agencia Española de Protección de Datos."
      },
      {
        title: "Elaboración de Políticas de Privacidad",
        description: "Creación de documentos que informan a los usuarios sobre el tratamiento de sus datos personales, en cumplimiento con la normativa vigente."
      },
      {
        title: "Formación en Protección de Datos e Inteligencia Artificial",
        description: "Capacitación a empleados y directivos sobre la importancia de la protección de datos, cumplimiento normativo e inteligencia artificial."
      },
      {
        title: "Gestión de Derechos de los Interesados",
        description: "Asesoría en la atención y respuesta a las solicitudes de acceso, rectificación, supresión, y otros derechos de los titulares de datos."
      }
    ],
    propiedadIntelectual: [
      {
        title: "Asesoramiento en Derechos de Autor",
        description: "Consultoría sobre la protección y gestión de obras literarias, artísticas y científicas bajo la legislación de derechos de autor."
      },
      {
        title: "Registro de Marcas",
        description: "Asesoramiento y gestión del proceso de registro de marcas ante la Oficina Española de Patentes y Marcas (OEPM)."
      },
      {
        title: "Registro de Patentes",
        description: "Asesoramiento y gestión en el registro de invenciones y patentes, asegurando la protección legal de la propiedad industrial."
      },
      {
        title: "Vigilancia y Defensa de Derechos",
        description: "Servicios para la monitorización del uso no autorizado de marcas, patentes y derechos de autor, así como acciones legales en caso de infracción."
      }
    ],
    otrosServicios: [
      {
        title: "Arbitraje",
        description: "Asesoramiento en resolución de disputas mediante arbitraje."
      },
      {
        title: "Competencia",
        description: "Consultoría en derecho de la competencia y prácticas anticompetitivas."
      },
      {
        title: "Concursal",
        description: "Asesoría en insolvencias y procesos concursales."
      },
      {
        title: "Contratación Comercial",
        description: "Redacción y negociación de contratos comerciales."
      },
      {
        title: "Derecho Financiero y Bancario",
        description: "Consultoría en regulación del sector financiero."
      },
      {
        title: "Energía",
        description: "Asesoramiento en legislación energética."
      },
      {
        title: "Fiscal",
        description: "Planificación y cumplimiento tributario."
      },
      {
        title: "Financiación de Proyectos",
        description: "Gestión de financiación empresarial."
      },
      {
        title: "Inmobiliario",
        description: "Asesoría en operaciones inmobiliarias."
      },
      {
        title: "Laboral",
        description: "Consultoría en derecho laboral y relaciones laborales."
      },
      {
        title: "Litigación Civil",
        description: "Representación en litigios civiles."
      },
      {
        title: "Regulación Financiera e Inversiones Alternativas",
        description: "Consultoría en normativas de inversiones."
      },
      {
        title: "Procesal Civil",
        description: "Asesoría en procedimientos judiciales civiles."
      },
      {
        title: "Procesal Penal",
        description: "Defensa en procedimientos penales."
      },
      {
        title: "Societario y Gobierno Corporativo",
        description: "Consultoría en estructura y funcionamiento empresarial."
      },
      {
        title: "Tecnologías de la Información",
        description: "Asesoramiento en regulación digital y protección de datos."
      },
      {
        title: "Urbanismo y Medioambiente",
        description: "Consultoría en normativas de urbanismo y medio ambiente."
      }
    ]
  }

  return (
    <section id="que-hacemos" className="py-24 relative overflow-hidden bg-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll">Qué Hacemos</h2>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll">
            <ion-icon class="text-gold-200 text-6xl" name="trending-up"></ion-icon>
            <h3 className="text-3xl font-bold mb-6">Derecho Mercantil y Societario</h3>
            <ul className="grid lg:grid-cols-2 gap-6 text-gray-300">
              {
                services.mercantil.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 justify-start animate-on-scroll col-span-2  text-pretty" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ion-icon name="checkmark-circle-outline" class="text-gold-400 text-xl min-h-6 min-w-6 mt-2"></ion-icon>
                    <div className='flex flex-col gap-1'>
                      <span className='text-xl lg:text-2xl font-semibold'>{item.title}</span>
                      <span className='text-sm lg:text-base'>{item.description}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <ion-icon class="text-gold-200 text-6xl" name="finger-print"></ion-icon>
              <h3 className="text-3xl font-bold mb-6">Protección de Datos</h3>
              <ul className="space-y-3 text-gray-300">
                {
                  services.proteccionDatos.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start animate-on-scroll" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                      <ion-icon name="lock-closed-outline" class="text-gold-400 text-xl min-h-6 min-w-6 mt-2"></ion-icon>
                      <div className='flex flex-col gap-1'>
                        <span className='text-xl lg:text-2xl font-semibold'>{item.title}</span>
                        <span className='text-sm lg:text-base'>{item.description}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className=" p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <ion-icon class="text-gold-200 text-6xl" name="bulb-outline"></ion-icon>
              <h3 className="text-3xl font-bold mb-6">Propiedad Intelectual</h3>
              <ul className="space-y-3 text-gray-300">
                {
                  services.propiedadIntelectual.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start animate-on-scroll" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                      <ion-icon name="create-outline" class="text-gold-400 text-xl min-h-6 min-w-6"></ion-icon>
                      <div className='flex flex-col gap-1'>
                        <span className='text-xl lg:text-2xl font-semibold'>{item.title}</span>
                        <span className='text-sm lg:text-base'>{item.description}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-12 p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 animate-on-scroll relative">
            <ion-icon class="text-gold-200 text-6xl" name="file-tray-full-outline"></ion-icon>
            <h3 className="text-3xl font-bold mb-6">Otros servicios</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-gray-300">
              {
                services.otrosServicios.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ion-icon name="caret-forward-circle" class="text-gold-400 text-xl min-h-6 min-w-6 mt-2"></ion-icon>
                    <div className='flex flex-col gap-1'>
                      <span className='text-xl lg:text-2xl font-semibold'>{item.title}</span>
                      <span className='text-sm lg:text-base'>{item.description}</span>
                    </div>
                  </li>
                ))}
            </ul>
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