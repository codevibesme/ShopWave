import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem';

const OrderDetails = () => {
    const INR = Intl.NumberFormat("en-IN", {style: "currency", currency: "INR"})
    const orderItems = useSelector((state) => state.cart.cartItems);
    const subtotal = useSelector((state) => state.cart.subTotal);
    const shipping = useSelector((state) => state.cart.shipping);
    const total = useSelector((state) => state.cart.total);
    return (
        <div className='flex flex-col mb-6'>
            {orderItems.length!==0 && (
                orderItems.map( (item) => <OrderItem item={item} />)
            )}
            <hr className='text-gray-400 shadow-md shadow-gray-500 border mb-6'/>
            <div className='flex justify-between mb-6'>
                <input className='me-6 text-md text-green-950 rounded-md font-light h-12 w-3/4 px-8' placeholder='Gift card or discount code' />
                <button className='text-md text-center text-white bg-gradient-to-tr from-green-800 to-green-950 rounded-lg  p-2 hover:scale-105 hover:shadow-sm hover:shadow-green-800 h-12 w-1/4'>Apply</button>
            </div>
            <hr className='text-gray-400 shadow-md shadow-gray-500 border mb-6'/>
            <div className='flex justify-between mb-4'>
                <p className='text-md text-gray-600 font-light me-4'>Subtotal</p>
                <p className='text-md text-green-950'>{INR.format(subtotal)}</p>
            </div>
            <div className={`flex ${shipping>0 ? 'justify-between': ''} mb-6`}>
                <p className='text-md text-gray-600 font-light me-4'>Shipping</p>
                {shipping>=1 ? <p className='text-md text-green-950'>{INR.format(shipping)}</p> : <p className='text-lg text-gray-700'>To be estimated at next step</p>}
            </div>
            <hr className='text-gray-400 shadow-md shadow-gray-500 border mb-4'/>
            <div className='flex justify-between mb-4'>
                <p className='text-lg text-gray-600 me-4'>Total</p>
                <p className='text-2xl text-green-950'>{INR.format(total)}</p>
            </div>
        </div>
    )
}

export default OrderDetails