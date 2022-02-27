import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" className='py-20'>
        <div className='bg-gradient-to-r from-cyan-500 to-purple-200 rounded-2xl px-5 pt-10 pb-20 lg:w-2/4 mx-auto'>
            <h1 className='text-xl text-center text-white font-bold'>JOIN US TO STAY UPDATED WITH OUR MODULES</h1>
            <div className='flex flex-col sm:flex-row md:flex-row gap-3 mt-8 md:px-16'>
                <input type="text" placeholder="Enter your email address" class="focus:outline-none flex-1 px-3 py-3 rounded-md" />
                <button type="button" className='btn bg-blue-400 text-white hover:bg-gray-300 hover:text-black'>SUBSCRIBE</button>
            </div>
        </div>
    </section>
  )
}
