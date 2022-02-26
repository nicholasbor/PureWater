import React from 'react'

const ModuleGrid = () => {
  return (
    <div className='py-5 px-5'>
       <h1 className='text-3xl text-black font-bold pb-8'>Modules</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-screen-lg">
      <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 1</h1>
          <p className='text-lg text-left pl-2 font-bold'>Water Resources and Accessibility</p>
        </div>
        
        <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 2</h1>
          <p className='text-lg text-left pl-2 font-bold'>Water Health and Safety</p>
        </div>

        <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 3</h1>
          <p className='text-lg text-left pl-2 font-bold'>Water Sustainability</p>
        </div>

        <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 4</h1>
          <p className='text-lg text-left pl-2 font-bold'>Sanitation</p>
        </div>

        <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 5</h1>
          <p className='text-lg text-left pl-2 font-bold'>Hand Hygiene</p>
        </div>

        <div className="p-3 rounded-md shadow-lg">
        <h1 className='text-left pl-2 text-sm'>Module 6</h1>
          <p className='text-lg text-left pl-2 font-bold'>Disinfection and other Hygiene Practices</p>
        </div>
      </div>
    </div>
  )
}

export default ModuleGrid