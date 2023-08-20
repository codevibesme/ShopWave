import React from 'react'
import CategoryBanner from "../components/CategoryBanner";
import ProductList from '../components/ProductList';
const NewInPage = () => {
  return (
    <div  className='w-full flex flex-col justify-between'> 
      <CategoryBanner category={"bg-New-In"} dialogue={"BRAND NEW DESIGNS FOR SPRING AND SUMMER 2023!"}/>
      <ProductList />
    </div>
  )
}

export default NewInPage;