import React from 'react'

function Appointment() {
  return (
    <div className='bg-green1-500 flex flex-col items-center p-4 gap-y-10 w-full h-52 justify-center'>
      <h2 className='md:text-2xl text-lg font-semibold text-center'>Gostou? Faça o agendamento da sua cerimônia</h2>
      <button className='bg-green4-800 font-medium text-white md:text-xl text-base p-4 cursor-pointer hover:bg-green2-600 rounded-lg'>AGENDAR</button>
    </div>
  )
}

export default Appointment