import React from 'react'

const CategoryCard = ({item}) => {
  return (
    <div className='flex flex-col mx-4'>
        <div className='group h-64 w-64'>
            <img src={item.img} className="rounded-xl cursor-pointer hover:scale-105 duration-700 shadow-sm shadow-slate-400 " alt="category" />
            <h1 className='text-xl text-green-950 my-2 text-start cursor-pointer'>{item.name} <span className='text-lg group-hover:text-xl duration-200'>&rarr;</span></h1>
        </div>
    </div>
  );
}

export default CategoryCard;