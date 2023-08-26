import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import { IoCheckmarkCircle } from "react-icons/io5";

const Product = ({product}) => {
  const INR = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  });
  const dispatch = useDispatch();
  const imageRef = useRef(null);
  const user = useSelector(state => state.auth.user);
  const [ shoeSize, setShoeSize ] = useState(36);
  const [ added, setAdded ] = useState(false);
  const changeToHoverImage = () => {
    imageRef.current.src = product.hoverThumbnail;
  }
  const changeToThumbnail = () => {
    imageRef.current.src=product.thumbnail;
  }
  const addToCart = async () => {
    const details = {
      user_id: user._id,
      product:{
        id: product._id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        size: shoeSize
      }
    };

    try{
      const response = await fetch("http://localhost:8000/cart/add", {
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(details)
      });
      const data = await response.json();
      console.log(data);
    } catch(err) {
      console.log({error: err.message});
    }
    dispatch(addItem({newItem: details.product}));
    setAdded(true);
    setTimeout(()=> setAdded(false), 1000);
  }
  return (
    <div className='flex flex-col w-72 min-h-fit me-6 mb-6 group cursor-pointer' >
        <img ref={imageRef} src={product.thumbnail} onMouseOver={changeToHoverImage} onMouseLeave={changeToThumbnail} className=' w-72 h-72 mx-auto rounded-lg mb-6 group-hover:scale-105 duration-1000' alt="prodImg" />
        <p className=' text-sm text-green-950 mb-4 group-hover:underline'>{product.name}</p>
        <p className='text-xl text-green-950 mb-8'>{INR.format(product.price)}</p>
        <select className='mb-4 border-green-950 border' onChange={(e) => setShoeSize(e.target.value)}>
            {product.sizes.map((size ) => <option key={size} value={size}>{size}</option>)}
        </select>
        
        {!added && <button className='text-xl bg-gradient-to-tr text-white from-green-900 to-green-950 hover:scale-105 hover:shadow-md h-12 hover:shadow-green-900/100 rounded-lg' onClick={addToCart}>Add to cart</button>}
        {added && <IoCheckmarkCircle className='text-5xl text-green-950 rounded-lg text-center mx-auto' onClick={addToCart} />}
    </div>
  );
}

export default Product;