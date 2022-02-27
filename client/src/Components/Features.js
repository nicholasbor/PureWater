import React from 'react'
import water from '../Images/hands.png'

const Features = () => {
  return (
    <section className='relative mb-20'>
        <div id="help" className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
            <div className='flex flex-1 justify-center mb-10 md:mb-16 lg:mb-0 z-10'>
                <img className='w-4/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full' src={water} alt="water"/>
            </div>
            <div className='flex flex-1 flex-col items-center lg:items-start'>
                <h1 style={{ fontSize: '45px' }} className='font-Bebas text-black font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
                    HOW WE CAN HELP
                </h1>
                <p className='text-gray text-lg text-center lg:text-left mb-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='flex justify-center flex-wrap gap-6'>
                    <a href="https://www.unicef.org/wash" target="blank">
                        <button type="button" className="px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white bg-blue-400 hover:duration-300 hover:bg-sky-700 shadow-sm hover:shadow-lg hover:text-white">MORE INFO</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features