import React from 'react'
import CategoryBanner from "../components/CategoryBanner";
import ProductList from '../components/ProductList';
const Bestsellers = () => {
  return (
    <div  className='w-full flex flex-col justify-between'> 
      <CategoryBanner category={"bg-Bestsellers"} dialogue={"A collection of your favourite footwear"}/>
      <ProductList category={"Bestsellers"} />
    </div>
  )
}

export default Bestsellers;