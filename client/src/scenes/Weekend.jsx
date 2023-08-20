import React from 'react'
import CategoryBanner from '../components/CategoryBanner';
import ProductList from '../components/ProductList';
const Weekend = () => {
  return (
    <div  className='w-full flex flex-col justify-between'> 
      <CategoryBanner category={"bg-The-Weekend-Boot"} dialogue={"Versatile. Sustainable. Oh So Comfy!"}/>
      <ProductList />
    </div>
  )
}

export default Weekend;