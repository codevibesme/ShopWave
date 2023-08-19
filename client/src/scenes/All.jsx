import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
const All = () => {
  const [filter, setFilter] = useState(0);
  
  return (
    <div className='flex flex-col p-10 me-8 min-h-screen w-full'>
      <h1 className='text-5xl text-green-950 mb-10'> Shop All</h1>
      <div className='flex justify-between mb-8'>
        <div className='flex'>
          <h1 className='text-xl text-green-900 font-extralight me-4'>Filter: </h1>
          <select className='focus:ring-0 border-0 text-lg p-0 text-green-900 font-light'>
              <option defaultValue selected>Size</option>
          </select>
          </div>
          <div className='flex'>
          <h1 className='text-xl text-green-900 font-extralight me-6'>Sort by: </h1>
          <select className='focus:ring-0 border-0 text-lg p-0 me-6 text-green-900 font-light'>
              <option defaultValue selected>Select</option>
          </select>
          <p className='text-xl text-gray-400'>Products </p>
        </div>
      </div>
      <ProductList filter={filter}/>
    </div>
  )
}

export default All;