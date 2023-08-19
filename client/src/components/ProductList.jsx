import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductList = ({filter}) => {
    const productList = useSelector(state => state.product.products);
    console.log(productList);
    return (
        <div className='flex flex-wrap w-full min-h-screen'>
            {productList.map(product => <Product product={product}/>)}
        </div>
    );
}

export default ProductList;