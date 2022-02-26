import React from 'react'
import about from '../Images/about.jpg'
import water from '../Images/drop.png'

const Features = () => {
  return (
    <section className='py-20'>
        <div className='relative'>
            <div className='container flex flex-col lg:flex-row items-cetner justify gap-x-24'>
                <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full' src={about} alt="water" />
                </div>
                <div className='flex flex-1 flex-col items-center lg:items-start'>
                    <h1 className='text-3xl text-black font-bold'>ABOUT US</h1>
                    <p className='text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className='container flex flex-col lg:flex-row items-cetner justify gap-x-24'>
                <div className='flex flex-1 flex-col items-center lg:items-start'>
                    <h1 className='text-3xl text-black font-bold'>WATER SANITATION</h1>
                    <p className='text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-full'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='flex flex-1 justify-center z-10 mb-10 lg:mb-0'>
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full' src={about} alt="water" />
                </div>
            </div>
            <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
                <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full' src={water} alt="water"/>
                </div>
                {/* Content */}
                <div className='flex flex-1 flex-col items-center lg:items-start'>
                    <h2 className='text-black font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6'>
                        SANITARY EDUCATION FOR OUR MOST VULNERABLE
                    </h2>
                    <p className='text-gray text-lg text-center lg:text-left mb-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='flex justify-center flex-wrap gap-6'>
                        <button type="button" className='btn bg-blue-400 text-white hover:bg-gray-300 hover:text-black'>RSample</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features