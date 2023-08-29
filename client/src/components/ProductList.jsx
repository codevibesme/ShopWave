import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { setProducts } from '../slices/productSlice';

const ProductList = ({category}) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.products);
    const size = useSelector((state) => state.product.size);

    const fetchProducts = async () => {
        const response = await fetch(`https://shopwave-xmkp.onrender.com/products/${category}`, {
            method:"GET",
        });
        const {products} = await response.json();
        if(products){
            dispatch(setProducts({products}));
        } else {
            console.log("Failed to fetch");
            return;
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []); //eslint-disable-line
    return (
        <div className='p-10 me-8 min-h-fit w-full'>
            {productList.length===0 && <h1 className='text-gray-400 text-center text-4xl'>No products to show</h1>}
            {productList.length!==0 && (
                <>
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
                        {productList.map(product => <Product product={product} key={product.name}/>)}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductList;