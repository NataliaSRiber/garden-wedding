'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import main from '../../assets/married-couple-home.jpg'

export default function Hero() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (
    <div
      className={`${
        animation && 'opacity-100'
      } relative h-112 w-full opacity-0 transition-all delay-100 duration-700 ease-in`}
    >
      <Image
        className="h-full w-full object-cover object-center"
        src={main}
        alt="Married couple"
        layout="fill"
      />
      <p className="absolute bottom-0 w-full text-right text-white text-sm pr-4">
      <a 
          href="https://br.freepik.com/fotos-gratis/casal-na-natureza-tiro-completo_30577587.htm#&position=6&from_view=collections&uuid=9491e9e2-774c-4766-a7b3-6c9cabf1a858" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          Imagem de Freepik
        </a>
      </p>
    </div>
  )
}

