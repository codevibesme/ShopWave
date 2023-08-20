import React from 'react'

const CategoryBanner = ({category, dialogue}) => {
  const heading = category.split('-').splice(1).join(" ");
  return (
    <div className={`w-full min-h-screen ${category} bg-center bg-cover flex flex-col justify-center `} >
      <h1 className='text-4xl font-bold text-white mb-5 mx-auto'>{heading}</h1>
      <h1 className='text-2xl text-white opacity-80 mx-auto'>{dialogue}</h1>
    </div>
  )
}

export default CategoryBanner