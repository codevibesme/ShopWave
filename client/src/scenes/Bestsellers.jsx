import React from 'react'
import CategoryBanner from "../components/CategoryBanner";
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
const Bestsellers = () => {
  const size = useSelector((state) => state.product.size);
  return (
    <div  className='w-full flex flex-col justify-between'> 
      <CategoryBanner category={"bg-Bestsellers"} dialogue={"A collection of your favourite footwear"}/>
      <ProductList />
    </div>
  )
}

export default Bestsellers;