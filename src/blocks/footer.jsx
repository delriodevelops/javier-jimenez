import React from 'react'

const Footer = () => {
  const navItems = ["Inicio", "Quienes somos", "Que hacemos", "Contacto"]


  return (
    <footer className="py-12 relative overflow-hidden bg-gray-600">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-semibold mb-4 flex items-center">
              <ion-icon name="shield-checkmark-outline" class="mr-2 text-gold-200"></ion-icon>
              Escudo Leal JPT
            </h3>
            <p className="text-gray-400">Innovación legal para un mundo en constante evolución.</p>
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item} className="animate-on-scroll" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-gold-200 transition duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <ion-icon name="mail-outline" class="mr-2 text-gold-200"></ion-icon>
              escudolealjpt@gmail.com
            </p>
            <p className="flex items-center text-gray-400">
              <ion-icon name="call-outline" class="mr-2 text-gold-200"></ion-icon>
              +34 622 15 65 43
            </p>
          </div>
          <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/javier-jim%C3%A9nez-p%C3%A9rez-tom%C3%A9/" target='_blank' className="text-gray-400 hover:text-gold-200 transition duration-300">
                <ion-icon name="logo-linkedin" class="text-2xl"></ion-icon>
              </a>
              <a href="https://www.instagram.com/escudolealjpt/" target='_blank' className="text-gray-400 hover:text-gold-200 transition duration-300">
                <ion-icon name="logo-instagram" class="text-2xl"></ion-icon>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-200 transition duration-300">
                <ion-icon name="logo-tiktok" class="text-2xl"></ion-icon>
              </a>
              <a href="https://www.youtube.com/@EscudoLealJPT" target='_blank' className="text-gray-400 hover:text-gold-200 transition duration-300">
                <ion-icon name="logo-youtube" class="text-2xl"></ion-icon>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 animate-on-scroll">
          <p>&copy; 2024 Escudo Leal JPT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer