'use client'

import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '', country: '', phone: '', privacyPolicy: false, newsletter: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [showModal, setShowModal] = useState({ type: '', isOpen: false }) // Estado para manejar el modal

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

  const openModal = (type) => {
    setShowModal({ type, isOpen: true })
  }

  const closeModal = () => {
    setShowModal({ type: '', isOpen: false })
  }

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gray-600 text-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center ">

          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll animate-fade-in-up">Contacto</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Para consultas personalizadas y un asesoramiento de calidad, no dude en contactarnos. Estaremos encantados de atenderle.
          </p>
          <div className="glassmorphism rounded-xl">
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
                    Acepto que he leído los <button type='button' className='font-bold text-blue-500 pl-1' onClick={() => openModal('terms')}>términos y condiciones y el aviso legal</button>. Por favor, lea nuestras
                    <button type='button' className='font-bold text-blue-500 pl-1' onClick={() => openModal('privacy')}>politicas de privacidad</button> para entender como manejamos su información personal.
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
              {/* Modal */}
              {showModal.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                  <div className="bg-gray-800 p-8 rounded-lg w-11/12 max-w-4xl max-h-[80dvh] overflow-y-auto z-50">
                    <div className="text-gray-300 mb-6">
                      {
                        showModal.type === 'terms'
                          ? (
                            <div class="container mx-auto px-6 py-12">
                              <h1 class="text-3xl font-semibold mb-4 ">Términos y Condiciones de Uso</h1>
                              <p class="mb-6">Bienvenido al sitio web de ESCUDO LEAL JPT (en adelante, “el Sitio Web”). A continuación, se describen los Términos y Condiciones de uso que regulan el acceso y uso de este sitio. Al acceder y navegar por el Sitio Web, usted acepta cumplir con estos términos. Si no está de acuerdo con alguna parte, debe abstenerse de utilizarlo.</p>

                              <h2 class="text-2xl font-semibold mb-2">1. Objeto</h2>
                              <p class="mb-6">El presente documento regula las condiciones generales de uso del Sitio Web, así como los derechos y obligaciones de los usuarios en relación con los servicios y contenidos ofrecidos a través del mismo.</p>

                              <h2 class="text-2xl font-semibold mb-2">2. Titular del sitio web</h2>
                              <p class="mb-6">El responsable y titular del Sitio Web es Javier Jiménez Pérez-Tomé (en adelante, “el Titular”), con correo de contacto: <a href="mailto:escudolealjpt@gmail.com" class="text-blue-500 hover:underline">escudolealjpt@gmail.com</a>.</p>

                              <h2 class="text-2xl font-semibold mb-2">3. Acceso y uso del Sitio Web</h2>
                              <p class="mb-6">El acceso al Sitio Web es gratuito y no requiere suscripción ni registro previo. Sin embargo, algunos servicios pueden requerir que los usuarios proporcionen ciertos datos personales, que serán tratados conforme a la Política de Privacidad del sitio.</p>
                              <p class="mb-6">El usuario se compromete a utilizar el Sitio Web de forma diligente, legal y responsable, evitando realizar cualquier actividad que pueda dañar la funcionalidad, la seguridad o los derechos de terceros.</p>

                              <h2 class="text-2xl font-semibold mb-2">4. Propiedad intelectual e industrial</h2>
                              <p class="mb-6">Todos los contenidos del Sitio Web, incluidos textos, gráficos, logotipos, imágenes, vídeos, software y demás elementos (en adelante, “los Contenidos”), son propiedad exclusiva del Titular o se utilizan bajo licencia de terceros con todos los derechos reservados.</p>
                              <p class="mb-6">Queda prohibida la reproducción, distribución o uso de los Contenidos sin autorización expresa del Titular.</p>

                              <h2 class="text-2xl font-semibold mb-2">5. Política de enlaces</h2>
                              <p class="mb-6">El Sitio Web puede contener enlaces a sitios web de terceros. El Titular no se hace responsable de los contenidos o servicios ofrecidos en estos sitios enlazados, ni garantiza la disponibilidad o legalidad de los mismos.</p>

                              <h2 class="text-2xl font-semibold mb-2">6. Exclusión de responsabilidad</h2>
                              <p class="mb-6">El Titular no será responsable de los daños o perjuicios derivados del uso del Sitio Web, tales como fallos técnicos, virus o errores en los contenidos, más allá de lo establecido por la legislación aplicable.</p>
                              <p class="mb-6">El Sitio Web se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, explícitas o implícitas.</p>

                              <h2 class="text-2xl font-semibold mb-2">7. Modificaciones</h2>
                              <p class="mb-6">El Titular se reserva el derecho a modificar, actualizar o eliminar en cualquier momento y sin previo aviso los Términos y Condiciones, así como cualquier contenido o servicio del Sitio Web.</p>

                              <h2 class="text-2xl font-semibold mb-2">8. Ley aplicable y jurisdicción</h2>
                              <p class="mb-6">Estos Términos y Condiciones se regirán e interpretarán de acuerdo con la legislación española. Para cualquier disputa o reclamación derivada de su uso, ambas partes se someterán a los juzgados y tribunales de Madrid, España.</p>
                              <h1 class="text-4xl font-bold mb-6">Aviso Legal</h1>

                              <p class="mb-4">
                                El presente aviso (en adelante, el “Aviso Legal”) regula el uso del servicio del portal web
                                <a href="https://www.escudolealjpt.com" class="text-blue-600 underline">https://www.escudolealjpt.com</a>
                                (en adelante, el “Portal” o la “Web”), que ESCUDO LEAL JPT despacho de abogados (en adelante, “ESCUDO LEAL JPT”) pone a disposición de los usuarios de internet.
                              </p>
                              <p class="mb-4">
                                La utilización de la Web implica la condición de usuario de la web (en adelante, el “Usuario”) y la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal en la versión publicada por ESCUDO LEAL JPT en el momento mismo en que el Usuario accede a la Web. En consecuencia, el Usuario debe leer este Aviso Legal cada vez que se proponga utilizar la web, ya que tanto el Web como el Aviso Legal pueden sufrir modificaciones.
                              </p>

                              <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Información legal</h2>
                              <p class="mb-4">
                                ESCUDO LEAL JPT Despacho de Abogados, correo electrónico de contacto <a href="mailto:escudolealjpt@gmail.com" class="text-blue-600 underline">escudolealjpt@gmail.com</a>, es titular del nombre de dominio
                                <a href="https://www.escudolealjpt.com" class="text-blue-600 underline">https://www.escudolealjpt.com</a> y de las páginas de internet a las que se accede a través de dicho dominio.
                              </p>
                              <p class="mb-4">
                                El acceso a la página web es gratuito, sin perjuicio del coste de conexión a través de la red de telecomunicaciones correspondiente para el Usuario. Los servicios jurídicos prestados por el despacho tienen el precio que se indica en la correspondiente oferta comercial y no se ofrecen o prestan a través de la Web.
                              </p>

                              <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Propiedad intelectual e industrial</h2>
                              <p class="mb-4">
                                Todos los contenidos del Portal (textos, fotografías, imágenes, software, códigos fuente, etc.) son propiedad intelectual de ESCUDO LEAL JPT o de terceros, y no podrán ser reproducidos, copiados, transmitidos, distribuidos o manipulados sin la autorización previa y por escrito de ESCUDO LEAL JPT, manteniendo siempre el “copyright” intacto y cualquier otro indicador de la propiedad intelectual.
                              </p>
                              <p class="mb-4">
                                Cualquier uso o modificación no autorizado de los contenidos será considerado una violación de las leyes internacionales de “copyright”, que protegen los derechos de autor.
                              </p>

                              <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Condiciones de uso del portal</h2>
                              <h3 class="text-xl font-semibold text-gray-800 mb-2">3.1 Obligación de hacer un uso correcto del Portal</h3>
                              <p class="mb-4">
                                El Usuario se compromete a utilizar el Portal conforme a la Ley, este Aviso Legal, la moral, las buenas costumbres y el orden público. El Usuario será responsable de los daños y perjuicios que puedan causarse como consecuencia del incumplimiento de esta obligación, tanto frente a ESCUDO LEAL JPT como frente a terceros.
                              </p>

                              <h3 class="text-xl font-semibold text-gray-800 mb-2">3.2 Introducción de enlaces al Portal</h3>
                              <p class="mb-4">
                                Los usuarios de internet que deseen introducir enlaces desde sus propias páginas web al Portal deberán cumplir con las siguientes condiciones:
                              </p>
                              <ul class="list-disc list-inside mb-4">
                                <li>El enlace solo permitirá el acceso a la página de inicio del Portal, sin reproducirla de ninguna forma.</li>
                                <li>No se podrán establecer marcos o frames que oculten la identidad del Portal ni que permitan la visualización de sus contenidos junto a otros ajenos.</li>
                                <li>No se podrán realizar manifestaciones falsas, inexactas o incorrectas sobre ESCUDO LEAL JPT, sus socios o empleados.</li>
                                <li>El establecimiento del enlace no implica la existencia de relaciones entre ESCUDO LEAL JPT y el propietario de la página web donde se establezca, ni la aceptación de sus contenidos o servicios.</li>
                              </ul>

                              <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Limitación de responsabilidad</h2>
                              <h3 class="text-xl font-semibold text-gray-800 mb-2">4.1 Uso del Portal</h3>
                              <p class="mb-4">
                                El Usuario es consciente de que utiliza el Portal bajo su exclusiva responsabilidad.
                              </p>

                              <h3 class="text-xl font-semibold text-gray-800 mb-2">4.2 Seguridad</h3>
                              <p class="mb-4">
                                El Usuario debe ser consciente de que las medidas de seguridad de los sistemas informáticos en internet no son completamente fiables.
                              </p>

                              <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Legislación aplicable</h2>
                              <p class="mb-4">
                                El presente Aviso Legal se rige por la legislación española.
                              </p>
                            </div>

                          )
                          : (
                            <div className="modal-body p-6 rounded-lg shadow-lg text-white">
                              <p className="mb-4">
                                La presente <strong>Política de Privacidad</strong> describe el tratamiento de los datos personales que
                                <strong>Escudo Leal JPT Despacho de Abogados</strong> (en adelante, “<strong>ESCUDO LEAL JPT</strong>”) realiza sobre los usuarios de su página web https://www.escudolealjpt.com
                                (en adelante, la “<strong>Web</strong>”).
                              </p>
                              <p className="mb-4">
                                Al navegar por la Web, no es necesario que proporcione datos personales ni que se registre como usuario. Sin embargo, en la Web encontrará formularios para
                                <strong>suscribirse a newsletters</strong> y al <strong>blog</strong>, donde puede facilitar sus datos personales de manera voluntaria. A continuación, se detalla el tratamiento de estos datos personales.
                              </p>
                              <p className="mb-4">
                                Para cualquier duda, puede contactar con el <strong>Delegado de Protección de Datos</strong> de Escudo Leal JPT (en adelante, “<strong>DPO</strong>”) a través del correo electrónico:
                                <a href="mailto:dpoescudolealjpt@gmail.com" className="text-blue-500 hover:underline">dpoescudolealjpt@gmail.com</a>.
                              </p>

                              <h3 className="text-xl font-semibold mb-2">1. Responsable del Tratamiento de los Datos</h3>
                              <p className="mb-4">
                                El responsable de los datos personales recogidos es <strong>Escudo Leal JPT</strong>, cuyo contacto es:
                                <br />Correo electrónico: <a href="mailto:escudolealjpt@gmail.com" className="text-blue-500 hover:underline">escudolealjpt@gmail.com</a>.
                              </p>

                              <h3 className="text-xl font-semibold mb-2">2. Datos Recogidos y Finalidad</h3>
                              <div className="mb-4">
                                Recogemos los datos identificativos y de contacto que usted nos facilita para:
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                  <li>Atender su <strong>solicitud</strong> (suscripción a newsletter, suscripción al blog, consulta, etc.).</li>
                                  <li>Contactar con usted para gestionar adecuadamente su petición.</li>
                                </ul>
                              </div>

                              <h3 className="text-xl font-semibold mb-2">3. Legitimación del Tratamiento</h3>
                              <p className="mb-4">
                                Los datos personales que nos facilite se tratan sobre la base del <strong>consentimiento</strong> que usted nos otorga al enviarnos su solicitud o consulta. Este consentimiento puede ser revocado en cualquier momento siguiendo los medios indicados en el apartado 6 (“<strong>Derechos</strong>”).
                              </p>

                              <h3 className="text-xl font-semibold mb-2">4. ¿Con Quién Compartimos Sus Datos?</h3>
                              <p className="mb-4">
                                Los <strong>departamentos</strong> de Escudo Leal JPT que necesiten gestionar su petición pueden acceder a sus datos personales. Además, trabajamos con prestadores de servicios que, como <strong>encargados del tratamiento</strong>, pueden acceder a sus datos bajo nuestras instrucciones, asegurando el cumplimiento de medidas de seguridad adecuadas.
                              </p>

                              <h3 className="text-xl font-semibold mb-2">5. Duración de Conservación de los Datos</h3>
                              <p className="mb-4">
                                Los datos personales se conservarán mientras sea necesario para procesar la solicitud o petición realizada, más un período adicional de <strong>tres años</strong>.
                              </p>
                              <p className="mb-4">
                                Los datos de los suscriptores de nuestras <strong>newsletters</strong> y <strong>blog</strong> se mantendrán hasta que soliciten la baja.
                              </p>

                              <h3 className="text-xl font-semibold mb-2">6. Derechos</h3>
                              <div className="mb-4">
                                De acuerdo con la normativa vigente, usted tiene derecho a:
                                <ul className="list-disc list-inside pl-4 space-y-2">
                                  <li><strong>Acceso</strong> a sus datos.</li>
                                  <li><strong>Rectificación</strong> de los datos incorrectos.</li>
                                  <li><strong>Supresión</strong> de sus datos.</li>
                                  <li><strong>Oposición</strong> a ciertos tratamientos.</li>
                                  <li><strong>Limitación</strong> del tratamiento.</li>
                                  <li><strong>Portabilidad</strong> de sus datos.</li>
                                </ul>
                              </div>
                              <p className="mb-4">
                                Si considera que sus datos han sido tratados incorrectamente, puede presentar una reclamación al <strong>DPO</strong> o ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" className="text-blue-500 hover:underline">www.aepd.es</a>).
                              </p>
                              <p className="mb-4">
                                Para ejercer sus derechos o revocar su consentimiento, contacte a Escudo Leal JPT a través del correo electrónico:
                                <a href="mailto:dpoescudolealjpt@gmail.com" className="text-blue-500 hover:underline">dpoescudolealjpt@gmail.com</a>.
                              </p>
                            </div>
                          )
                      }
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-full px-4 py-2 bg-gradient-to-r from-gold-200 to-gold-300 text-gray-900 font-semibold rounded-lg hover:from-gold-300 hover:to-gold-400 transition duration-300"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
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
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          <a href="#blog" className="w-fit inline-flex mt-8 items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
            <ion-icon name="arrow-down-outline" class="mr-2"></ion-icon>
            Más sobre nosotros
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact