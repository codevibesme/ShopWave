import React from 'react';
import { IoSearchOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='sticky top-0 bg-white flex text-black text-bold opacity-100  min-w-full bg-white-600 pb-6 pt-4 px-10 shadow-md z-40 '>
        <img src="/assets/logo/shopwaveLogo.png" alt="logo" className='rounded-xl z-40 scale-125 hover:scale-150 h-16 duration-1000' onClick={()=>navigate("/")} />
        <div className='flex flex-col md:flex-row my-4 md:my-0 md:mx-10 h-fit md:relative md:top-8 w-full'>
            <p className='text-lg h-fit mx-3 cursor-pointer min-w-fit hover:scale-105 hover:text-green-950 hover:underline' onClick={() => navigate("/products/new")}>New in</p>
            <p className='text-lg h-fit mx-3 cursor-pointer min-w-fit hover:scale-105 hover:text-green-950 hover:underline' onClick={() => navigate("/products/bestsellers")}>Bestsellers</p>
            <p className='text-lg h-fit mx-3 cursor-pointer min-w-fit hover:scale-105 hover:text-green-950 hover:underline' onClick={() => navigate("/products/weekend")}>Weekend Boot</p>
            <p className='text-lg h-fit mx-3 cursor-pointer min-w-fit hover:scale-105 hover:text-green-950 hover:underline' onClick={() => navigate("/products/terrus")}>Terrus Clog</p>
            <p className='text-lg h-fit mx-3 cursor-pointer min-w-fit hover:scale-105 hover:text-green-950 hover:underline' onClick={() => navigate("/products/all")}>Shop all</p>
        </div>
        <div className='flex justify-start mx-10 h-fit w-full relative text-black top-8 md:justify-end'>
            <IoSearchOutline className='lg:block text-xl relative top-2 left-6 text-black'/>
            <input placeholder="Search an item"  className='lg:block text-black border rounded-lg px-6 h-10 w-22 border-gray-400  hover:border-green-950 outline-green-900 cursor-text' />
            <IoCartOutline className='text-3xl mx-4 hover:scale-105 hover:text-green-950' onClick={() => navigate("/cart")} />
            <IoPersonOutline className='text-3xl mx-4 hover:scale-105 hover:text-green-950' onClick={() => navigate("/login")}/>
        </div>
    </nav>
  )
}

export default Navbar