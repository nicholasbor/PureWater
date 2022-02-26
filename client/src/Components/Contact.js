import React from 'react'

export const Contact = () => {
  return (
    <section className='py-20'>
        <div className='bg-gradient-to-r from-cyan-500 to-purple-200 rounded-2xl px-5 pt-10 pb-20 sm:w-3/4 lg:w-2/4 mx-auto'>
            <h1 className='text-3xl text-center text-white font-bold'>JOIN US TO STAY UPDATED WITH OUR MODULES</h1>
            <div className='flex flex-col sm:flex-row gap-3 mt-8'>
                <input type="text" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md" />
                <button type="button" className='btn bg-blue-400 text-white hover:bg-gray-300 hover:text-black'>SUBSCRIBE</button>
            </div>
        </div>
    </section>
  )
}
