import React from 'react'

const BestSellersCard = ({item}) => {
  return (
    <div className='flex flex-col mx-4'>
        <div className='group rounded-md h-96 w-64'>
            <img src={item.img} className="h-96 w-64 content-center" alt="category" />
            <h1 className='text-lg text-green-950 my-2 text-start cursor-pointer'>{item.name} <span className='group-hover:text-xl text-lg duration-200'>&rarr;</span></h1>
        </div>
    </div>
  )
};

export default BestSellersCard;