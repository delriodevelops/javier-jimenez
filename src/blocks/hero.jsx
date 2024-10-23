import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-800 mt-16 md:mt-0">
      <div className="container mx-auto px-6 relative z-10 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            alt="Logo escudo leal JPT"
            style={{ background: "#fff" }}
            className='mx-auto rounded-full mb-16'
            src="/image.svg"
            width={350}
            height={350}
          />
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Tu Aliado Legal<br />en el Entorno Digital
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <b>Escudo Leal JPT</b>: Su Aliado de Confianza en el Ámbito Legal, Siempre a un Click de Distancia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
              <ion-icon name="flash-outline" class="mr-2"></ion-icon>
              Consulta Gratuita
            </a>
            <a href="#quienes-somos" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gold-200 border-2 border-gold-200 hover:bg-gold-200 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
              <ion-icon name="arrow-down-outline" class="mr-2"></ion-icon>
              Descubre Más
            </a>
          </div>
        </div>
      </div>
      <a
        href='#quienes-somos'
        className="left-1/2 transform -translate-x-1/2 animate-bounce  rounded-full items-center flex w-fit aspect-square p-6">
        <ion-icon name="chevron-down-outline" class="text-4xl text-gold-200"></ion-icon>
      </a>
    </section>
  )
}

export default Hero