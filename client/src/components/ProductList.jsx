import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductList = () => {
    const productList = useSelector(state => state.product.products);
    const size = useSelector((state) => state.product.size);
    const [filter, setFilter] = useState(0);
    return (
        <div className='p-10 me-8 min-h-screen w-full'>
            <div className='flex justify-between mb-8'>
                <div className='flex'>
                <h1 className='text-xl text-green-900 font-extralight me-4'>Filter: </h1>
                <select className='focus:ring-0 border-0 text-lg p-0 text-green-900 font-light'>
                    <option defaultValue selected>Size</option>
                </select>
                </div>
                <div className='flex'>
                <h1 className='text-xl text-green-900 font-extralight me-6'>Sort by: </h1>
                <select className='focus:ring-0 border-0 text-lg p-0 me-6 text-green-900 font-light'>
                    <option defaultValue selected>Select</option>
                </select>
                <p className='text-xl text-gray-400'>Products {size}</p>
                </div>
            </div>
            <div className='flex flex-wrap w-full min-h-screen'>
                {productList.map(product => <Product product={product}/>)}
            </div>
        </div>
    );
}

export default ProductList;