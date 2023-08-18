import React from 'react'

const OrderItem = ({item}) => {
    const INR = Intl.NumberFormat("en-IN",{
        style: "currency",
        currency: "INR",
    });
    return (
        <div className='min-h-full min-w-full flex mb-4'>    
            <div className='relative p-2 me-6 w-2/5 min-h-fit'>
                <div className='bg-stone-700 text-white text-center opacity-75 rounded-full absolute h-6 w-6 pb-1 left-[70px] top-0'>
                    <span className='text-xs h-fit w-fit'>{item.quantity}</span>
                </div>
                <img src={`../${item.img}`} alt="item" className='rounded-lg h-20' />
            </div>
            <div className='py-4 me-6 items-end w-1/2 min-h-fit'>
                <p className='text-lg text-green-950'>{item.name}</p>
            </div>
            <div className='py-4 w-full flex justify-end min-h-fit'>
                <p className='text-lg text-green-950'>{INR.format(item.price)}</p>

            </div>
        </div>
    
    )
}

export default OrderItem