import React from 'react';
import { IoSearchOutline, IoPersonOutline, IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=' sticky top-0 bg-white flex text-black text-bold opacity-100  min-w-fit bg-white-600 pb-6 pt-4 px-10 shadow-md z-40 '>
        <img src="/assets/logo/shopwaveLogo.png" alt="logo" className='rounded-xl z-40 scale-125 hover:scale-150 h-16 duration-1000' onClick={()=>navigate("/")} />
        <div className='flex flex-col md:flex-row my-4 md:my-0 md:mx-10 h-fit md:relative md:top-8 w-fit '>
            <p className='text-xl h-fit mx-3 cursor-pointer hover:scale-105 hover:text-green-950 '>Trending</p>
            <p className='text-xl h-fit mx-3 cursor-pointer hover:scale-105 hover:text-green-950'>New</p>
            <p className='text-xl h-fit mx-3 cursor-pointer hover:scale-105 hover:text-green-950'>Bestsellers</p>
            <p className='text-xl h-fit mx-3 cursor-pointer hover:scale-105 hover:text-green-950'>All</p>
            <IoSearchOutline className='hidden lg:block text-xl relative top-2 left-6 text-black hover:scale-105'/>
            <input placeholder="Search an item"  className='hidden lg:block text-black border rounded-lg px-6 h-10 w-22 border-gray-400 hover:border-2 hover:border-green-950 outline-green-900 cursor-text' />
        </div>
        <div className='flex justify-start mx-10 h-fit w-full relative text-black top-8 md:justify-end'>
            <IoCartOutline className='text-3xl mx-4 hover:scale-105 hover:text-green-950' onClick={() => navigate("/cart")} />
            <IoPersonOutline className='text-3xl mx-4 hover:scale-105 hover:text-green-950' onClick={() => navigate("/login")}/>
        </div>
    </nav>
  )
}

export default Navbar