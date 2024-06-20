import React from 'react'
import { presentations } from '../api/presentation'
import Image from 'next/image'

function Testimonial() {
  return (
    <section className="flex items-center text-gray-600 md:h-full">
      <div className="container mx-auto pb-16 pt-32">
        <div className="pb-10 text-center md:pb-20">
          <h1 className="px-2 text-2xl font-semibold text-gray-900 md:text-5xl">
            Testemunhos
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {presentations.map(
            ({ name, testimonial, avatar, link, authorInfo }, index) => (
              <div key={index} className="p-4 md:w-1/2 xl:w-1/3 w-10/12">
                <div className="h-full overflow-hidden rounded-lg border-2 bg-green1-500 border-opacity-60">
                  <div className="flex flex-row items-center justify-evenly pt-2">
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <Image
                        alt="woman avatar"
                        className="rounded-full object-cover"
                        src={avatar}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h1 className="mb-3 text-xl font-semibold md:text-3xl text-gray-900">
                      {name}
                    </h1>
                  </div>
                  <p className="w-full text-left text-gray-700 text-xs pl-2 mt-2">
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {authorInfo}
                    </a>
                  </p>
                  <div className="p-6 transition duration-300 ease-in bg-green1-500 text-gray-800 h-56">
                    <p className="mb-3 text-gray-900 leading-relaxed text-left md:text-xl text-lg italic">
                      {testimonial}
                    </p>
                  </div>

                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;