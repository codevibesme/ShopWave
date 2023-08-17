import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router";
const CartPage = () => {
  const  INR = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  let cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state)=>state.cart.subTotal);
  const navigate = useNavigate();
  const test = () => {
    // dispatch(rSetSubTotal({subTotal:subTotal*20}));
    navigate("/checkout/information");
  }
  return (
    <div className='px-10 min-h-screen min-w-screen py-14 flex flex-col justify-center'>
        {cartItems.length === 0 && (
          <div className='flex flex-col justify-center'>
            <h1 className='text-green-950 font-medium text-4xl text-center'>Cart is Empty!</h1>
            <h1 className='hover:text-green-950 cursor-pointer font-light mt-4 underline text-gray-500 text-lg text-center'>Browse Items to Add to Cart</h1>
          </div>
        )}
        {cartItems.length!==0 && (<>
          <div className='flex justify-between'>
              <h1 className='text-green-950 text-4xl'>Your Cart</h1>
              <h2 className='text-gray-400 text-xl underline hover:text-green-950 cursor-pointer'>Conintue shopping</h2>
          </div>
          <div className='flex justify-start w-full h-fit mt-6 mb-3'>
              <h6 className='w-1/2 text-gray-400 text-sm'>PRODUCT</h6>
              <h6 className="w-1/4 text-gray-400 text-sm">QUANTITY</h6>
              <h6 className='w-1/4 text-gray-400 text-sm text-start'>TOTAL</h6>
          </div>
          <hr className='border-gray-200 mt-4 mb-8'/>
          {cartItems.map(item => (
              <CartItem key={item.name} item={item} />
          ))}
          <hr className='border-gray-200 my-8'/>
          <div className='flex '>
            <h1 className='text-end w-full text-lg me-3  '>Subtotal</h1>
            <h1 className='text-start text-lg text-green-950 font-normal'>{INR.format(subTotal)}</h1>
          </div>
          <h1 className='text-end text-sm font-light text-green-950 my-4'>Taxes and shipping calculated at checkout</h1>
          <div className='flex justify-end'>
            <button className='text-2xl text-center text-white bg-gradient-to-r from bg-green-700 to bg-green-950 rounded-md h-12 w-56 px-4  hover:scale-105 hover:shadow-md hover:shadow-green-800/60' onClick={test}>Check out</button>
          </div>
        </>)}
    </div>
  );
}

export default CartPage