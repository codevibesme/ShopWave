import React from 'react'
import ProductList from '../components/ProductList';
const All = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='p-10 pb-0 me-8 w-full h-fit'>
        <h1 className='text-5xl text-green-950 h-fit'> Shop All</h1>
      </div>
      <ProductList />
    </div>
  )
}

export default All;