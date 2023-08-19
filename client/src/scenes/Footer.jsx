import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5';
import PaymentIcons from '../components/PaymentIcons';
import CopyRight from '../components/CopyRight';
const Footer = () => {
  return (
    <div className='flex flex-col bg-to-r from bg-green-800 to bg-green-950 min-h-fit p-8 pb-4'>
      <div className='flex justify-center text-gray-400 '>
        <div className='flex flex-col w-64 mx-4'>
          <h1 className='text-xl text-white font-bold mb-4'>ShopWave</h1>
          <h2 className='text-lg font-normal mb-4 text-white'>Socially and environmentally progressive outdoor footwear</h2>
          <div className='text-xl text-white'>
            <IoLogoFacebook className='inline mx-2'/> <IoLogoInstagram className='inline mx-2'/> <IoLogoTwitter className='inline mx-2'/> <IoLogoWhatsapp  className='inline mx-2'/>
          </div>
        </div>
        <div className='flex flex-col w-64 mx-4'>
          <h1 className='text-xl text-white font-bold mb-2'>Our Shop</h1>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>All Products</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>The Weekend Boot</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>The Winter Weekend Boot Z</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>The Terrus</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Accessories</h2>
        </div>
        <div className='flex flex-col w-64 mx-4'>
          <h1 className='text-xl text-white font-bold mb-2'>Help</h1>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Shipping Information</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Refund Policy</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Wear And Care FAQ</h2>
        </div>
        <div className='flex flex-col w-64 mx-4'>
          <h1 className='text-xl text-white font-bold mb-2'>About us</h1>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Values</h2>
          <h2 className='text-lg cursor-pointer font-normal mb-2 hover:underline hover:text-white'>Contact us</h2>
        </div>
      </div>
        <hr className=' border-1 shadow-sm border-gray-600 text-gray-400 ' />
        <PaymentIcons />
        <CopyRight />
    </div>
    
  )
}

export default Footer