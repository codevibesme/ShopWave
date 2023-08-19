import React from 'react'
import { useRef, useEffect } from 'react';
const Product = ({product}) => {
  const INR = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  });
  const imageRef = useRef(null);

  const changeToHoverImage = () => {
    imageRef.current.src = product.hoverThumbnail;
  }
  const changeToThumbnail = () => {
    imageRef.current.src=product.thumbnail;
  }
  return (
    <div className='flex flex-col w-72 min-h-fit me-6 mb-6 group cursor-pointer' >
        <img ref={imageRef} src={product.thumbnail} onMouseOver={changeToHoverImage} onMouseLeave={changeToThumbnail} className=' w-72 h-72 mx-auto rounded-lg mb-6 group-hover:scale-105 duration-1000' alt="prodImg" />
        <p className=' text-sm text-green-950 mb-4 group-hover:underline'>{product.name}</p>
        <p className='text-xl text-green-950 mb-8'>{INR.format(product.price)}</p>
        <select className='mb-4 border-green-950 border'>
            {product.sizes.map((size ) => <option value={size}>{size}</option>)}
        </select>
        <button className='text-xl bg-gradient-to-tr text-white from-green-900 to-green-950 hover:scale-105 hover:shadow-md h-12 hover:shadow-green-900/100 rounded-lg'>Add to cart</button>
    </div>
  );
}

export default Product;