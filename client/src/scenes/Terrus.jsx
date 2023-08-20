import React from 'react'
import CategoryBanner from '../components/CategoryBanner';
import ProductList from '../components/ProductList';
const Terrus = () => {
  return (
    <div  className='w-full flex flex-col justify-between'> 
      <CategoryBanner category={"bg-The-Terrus"} dialogue={"STAY EASY, COOL, & COMFY"}/>
      <ProductList />
    </div>
  )
}

export default Terrus;