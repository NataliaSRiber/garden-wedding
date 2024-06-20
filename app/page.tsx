'use client'

import React from 'react'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Appointment from './components/Appointment'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto flex flex-col px-6 py-10 md:px-20 md:py-20">
        <h1 className="pb-10 text-center font-bold text-gray-900 md:pb-20 md:text-5xl text-3xl">Casamento ao ar livre em Minas Gerais</h1>
        <p className="text-md text-justify md:text-xl">
        Realize o casamento dos seus sonhos em nosso espaço natural em Minas Gerais. Com uma vasta área verde, podemos acomodar até 350 convidados, proporcionando um ambiente único e tranquilo para sua celebração especial. Descubra como podemos tornar seu dia memorável e entre em contato para agendar uma visita ao nosso espaço.
        </p>
      </div>
      <div className="mx-auto flex flex-col px-6 py-10 md:px-20 md:py-20">
        <h2 className="pb-10 text-center text-xl font-bold text-gray-900 md:pb-20 md:text-4xl">Área Verde</h2>
        <div>
          <p>add images</p>
        </div>
      </div>
      < Appointment />
      <Testimonial />
    </main>
  )
}
