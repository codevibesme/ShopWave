import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import OrderDetails from '../components/OrderDetails';
import { setShipping, setTotal } from '../slices/cartSlice';
const ShippingPage = () => {
    const navigate = useNavigate();
    const name = useSelector((state) => state.shipping.name);
    const email = useSelector((state) => state.shipping.email);
    const phone = useSelector((state) => state.shipping.phone);
    const address = useSelector((state) => state.shipping.address);
    const country = useSelector((state) => state.shipping.country);
    const state = useSelector((state) => state.shipping.state);
    const city = useSelector((state) => state.shipping.city);
    const pincode = useSelector((state) => state.shipping.pincode);

    const shippingCost = country === "India" ? 500 : 3400;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShipping({shipping: shippingCost}));
        dispatch(setTotal());
    }, []) //eslint-disable-line
    return (
        <div className='w-full h-screen flex'>
            <div className='w-1/2 h-full p-10 flex flex-col'>
                <h1 className='text-3xl text-green-950 font-light mb-3'>ShopWave</h1>
                <h1 className='text-sm text-gray-500 mb-4 cursor-default'><span className='cursor-pointer text-blue-500' onClick={()=>navigate("/cart")}>Cart</span> &gt; <span onClick={()=>navigate("/checkout/information")} className='cursor-pointer text-blue-500'>Information</span> &gt; <span className='text-black'>Shipping</span> &gt; Payment</h1>
                <div className='rounded-xl border border-gray-400 p-4'>
                    <div className='flex flex-col'>
                        <div className='flex justify-end'>
                            <p className='text-md  text-gray-500 underline hover:text-green-800 cursor-pointer' onClick={() => navigate("/checkout/information")}>Edit Information</p>
                        </div>
                        <div className='flex mb-2'>
                            <p className='text-md text-gray-500 me-10'>Contact</p>
                            <p className='text-green-950 text-md'>{email} | {phone}</p>
                        </div>
                        <hr className='text-gray-400 shadow-md shadow-gray-500 border mb-2'/>
                        <div className='flex flex-col mb-2'>
                            <p className='text-md text-gray-500'>Ship to</p>
                            <p className='text-green-950 text-md'>{name}</p>
                            <p>{address}</p>
                            <p>{city} - {pincode} | {state} | {country}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-12'>
                    <h1 className='text-3xl text-green-950 mb-4'>Shipping method</h1>
                    <div className='rounded-xl border border-gray-400 p-4'>
                        <div className='flex'>
                            <div className='flex flex-col justify-center'>
                                <input type="checkbox" className='rounded-full me-2 text-xl' checked disabled />
                            </div>
                            {country === "India" ? <p className='text-green-950 text-md'>Domestic Standard Shipping: 3-4 business days · ₹500.00</p> 
                                : 
                            <p className='text-green-950 text-md'>International Standard Shipping: 4-10 business days · ₹3,400.00</p>}
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex justify-between'>
                    <p className='text-lg text-blue-600 underline cursor-pointer' onClick={()=>navigate("/checkout/information")}>Return to Information</p>
                    <button className='text-white bg-gradient-to-r from bg-green-950 to bg-green-600 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-green-700/50' onClick={() => navigate("/checkout/payment")}>Continue to Payment</button>
                </div>
            </div>
            <div className='w-1/2 py-10 ps-10 pe-32 min-h-full bg-stone-100'>
                <OrderDetails />
            </div>
        </div>
    )
}

export default ShippingPage