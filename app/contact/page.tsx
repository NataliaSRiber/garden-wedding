'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Hero from '../components/Hero'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    telephone:'',
    date:'',
    message:'',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div>
      <Hero />
      <div className='flex flex-col space-y-2 items-center justify-center px-6 pb-10'>
        <h1 className='md:py-20 py-10 px-2 text-2xl font-semibold text-gray-900 md:text-5xl'>Agende uma visita</h1>
        <p className='text-md text-justify md:text-xl'>Deseja conhecer nosso espaço para casamentos ao ar livre em Minas Gerais? Preencha o formulário abaixo com suas informações e entraremos em contato com você por e-mail ou WhatsApp para agendar uma visita ou para mais informações. Estamos ansiosos para ajudar a tornar o seu dia especial inesquecível!</p>
      </div>
      <form className='space-y-6 py-10 px-6 bg-green1-500'>
        <h2 className='text-center text-xl md:text-3xl'>Formulário de Agendamento</h2>
        <div className='flex flex-col space-y-4'>
          <label htmlFor='name' className='block md:text-base text-sm font-medium text-gray-800'>Nome</label>
          <input
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green2-600 focus:ring-green2-600 sm:text-base cursor-pointer p-2'
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block md:text-base text-sm font-medium text-gray-800'>E-mail</label>
          <input
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green2-600 focus:ring-green2-600 sm:text-base cursor-pointer p-2'
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='telephone' className='block md:text-base text-sm font-medium text-gray-800'>Telefone</label>
          <input
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green2-600 focus:ring-green2-600 sm:text-base cursor-pointer p-2'
            type='text'
            id='telephone'
            name='telephone'
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='date' className='block md:text-base text-sm font-medium text-gray-800'>Data(adicionar calendario)</label>
          <input
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green2-600 focus:ring-green2-600 sm:text-base cursor-pointer p-2'
            type='text'
            id='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='message' className='block md:text-base text-sm font-medium text-gray-800'>Comentários adicionais</label>
          <textarea
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green2-600 focus:ring-green2-600 sm:text-base cursor-pointer p-2'
            id='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='bg-green4-800 font-medium text-white md:text-xl text-base p-2 cursor-pointer hover:bg-green2-600 rounded-lg'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact