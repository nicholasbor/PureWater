import React from 'react'
import water from '../Images/drop.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative'>
        <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
            <div className='flex flex-1 flex-col items-center lg:items-start'>
                <h2 style={{ fontSize: '45px' }} className='font-Bebas text-black font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
                    SANITARY EDUCATION FOR OUR MOST VULNERABLE
                </h2>
                <p className='text-gray text-lg text-center lg:text-left mb-6'>
                    PureWater provides users a platform to engage in educational water sanitation content. Aligning with the United Nations Sustainable Development Goals of good health and well-being, clean water and sanitation and reducing inequalities, our platform acts as a bridge to provide quality education whilst simultaneously tackling these issues. As civilisation progresses, the necessity to carefully manage our supply for future generations is highly important. Teaching effective sanitation techniques and purification processes will aid towards this common goal and allow for increased quality of life for all.
                </p>
                <div className='flex justify-center flex-wrap gap-6'>
                    <Link to="/modules">
                        <button type="button" className="px-10 py-3 text-xl uppercase mt-10 rounded-lg text-white bg-blue-400 hover:duration-300 hover:bg-sky-700 shadow-sm hover:shadow-lg hover:text-white">GET STARTED</button>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
                <img className='animate-float w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full' src={water} alt="water"/>
            </div>
        </div>
    </section>
  )
}

export default Hero;
