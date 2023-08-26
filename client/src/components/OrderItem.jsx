import React from 'react'

const OrderItem = ({item}) => {
    const INR = Intl.NumberFormat("en-IN",{
        style: "currency",
        currency: "INR",
    });
    return (
        <div className='min-h-full min-w-full flex mb-4'>    
            <div className='relative p-2 min-w-fit me-4 min-h-fit'>
                <div className='bg-stone-700 text-white text-center opacity-75 rounded-full absolute h-6 w-6 pb-1 left-[70px] top-0'>
                    <span className='text-xs h-fit w-fit'>{item.quantity}</span>
                </div>
                <img src={item.thumbnail} alt="item" className='rounded-lg h-20' />                
            </div>
            <div className='py-4 me-8 items-end w-1/2 min-h-fit'>
                <p className='text-lg text-green-950'>{item.name}</p>
                <p className='text-md text-green-900 mb-2 font-light'>{item.size}</p>
            </div>
            <div className='py-4 min-w-fit flex justify-end min-h-fit'>
                <p className='text-lg text-green-950'>{INR.format(item.price)}</p>

            </div>
        </div>
    
    )
}

export default OrderItem