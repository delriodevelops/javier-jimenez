import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gray-800">
      <div className="container mx-auto  px-6 relative z-10 ">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300 animate-on-scroll">Últimas Publicaciones</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-evenly my-36 flex-wrap">
          {[
            { href: "https://www.linkedin.com/in/javier-jim%C3%A9nez-p%C3%A9rez-tom%C3%A9/", icon: "logo-linkedin" },
            { href: "https://www.instagram.com/javijimenez16/", icon: "logo-instagram" },
            { href: "tiktok", icon: "logo-tiktok" },
            { href: "https://www.youtube.com/@conquer_mind_1", icon: "logo-youtube" },
          ].map((link, index) => (
            <a target='_blank' href={link.href} key={index} className="p-8 rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-lg shadow-gold-200/30 hover:shadow-xl hover:shadow-gold-200/30 bg-gray-700 hover:scale-125 group animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <ion-icon name={link.icon} class="text-gold-200 text-[300px]"></ion-icon>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-gradient-to-r from-gold-200 to-gold-300 hover:from-gold-200 hover:to-gold-400 transition duration-300 ease-in-out transform hover:scale-105">
            <ion-icon name="chatbubbles-outline" class="mr-2"></ion-icon>
            Consulta Sobre Estos Temas
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog