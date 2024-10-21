'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Contact from '@/blocks/contact'
import Head from 'next/head'
import Hero from '@/blocks/hero'
import About from '@/blocks/about'
import Services from '@/blocks/services'
import Blog from '@/blocks/blog'
import Footer from '@/blocks/footer'

export default function PremiumLawFirmLanding() {
  const [activeSection, setActiveSection] = useState('inicio')
  const navItems = ["Inicio", "Quienes somos", "Que hacemos", "Contacto"]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" noModule />

      <div className="flex flex-col min-h-screen text-white bg-gray-800">
        <header className="fixed w-full z-50 ">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  style={{ background: "#fff" }}
                  className='mx-auto rounded-full'
                  src="/image.svg"
                  width={50}
                  height={50}
                />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-100 to-gold-300">Escudo Leal JPT</span>
              </div>
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    className={`text-sm font-medium hover:text-gold-200 transition duration-300 ${activeSection === item.toLowerCase().replace(" ", "-") ? 'text-gold-200' : 'text-gray-300'
                      }`}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                  >
                    {item}
                  </a>
                ))}
              </div>

            </nav>
          </div>
        </header>

        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  )
}