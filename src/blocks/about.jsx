import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="quienes-somos" className="py-24 relative overflow-hidden bg-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll">Quiénes Somos</h2>
        <div className="flex flex-col gap-12">
          <div className="lg:col-span-3 flex flex-col items-center animate-on-scroll">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image
                src="/javier_jimenez_photo.jpeg"
                alt="Dueño del Bufete"
                width={192}
                height={192}
                className="object-cover w-full h-full scale-[120%]"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2 text-center">Javier Jiménez Pérez-Tomé</h3>
            <p className="text-gray-300 text-center">Fundador y Director</p>
          </div>
          <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
            {[
              { icon: "flash-outline", title: "Eficiencia", description: "Soluciones Legales Ágiles y Efectivas, Diseñadas para el Entorno Digital." },
              { icon: "trophy-outline", title: "Excelencia", description: "Compromiso Inquebrantable con la Excelencia y la calidad Jurídica." },
              { icon: "people-outline", title: "Empatía", description: "Centrados en el cliente, con un trato personalizado que integra tecnología para una experiencia legal efectiva." }
            ].map((value, index) => (
              <div key={index} className="text-balanced p-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-105 group animate-on-scroll " style={{ animationDelay: `${index * 0.2}s` }}>
                <ion-icon name={value.icon} class="text-6xl text-gold-200 mb-6 transition-transform duration-300 group-hover:scale-110"></ion-icon>
                <h3 className="text-3xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 text-xl lg:text-2xl">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#que-hacemos" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
            <ion-icon name="arrow-forward-outline" class="mr-2"></ion-icon>
            Descubre Nuestros Servicios
          </a>
        </div>
      </div>
    </section>
  )
}

export default About