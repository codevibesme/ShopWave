import React from 'react'
import {useNavigate} from "react-router";
const CancelPage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-w-full h-fit p-20'>
      <div className='flex flex-col h-fit w-fit rounded-md bg-stone-200 mx-auto p-10'>
        <p className='text-red-700 text-6xl mx-auto mb-6'>Payment Failed!</p>
        <img src="/assets/paymet-failed.png"  alt="failure" className=' h-72 mx-auto rounded-lg mb-6' />
        <button className='bg-white text-gray-400 hover:text-black text-2xl rounded-md p-2 text-center hover:scale-105 hover:shadow-md hover:shadow-gray-400 mx-auto w-fit border-red-400 border' onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  )
}

export default CancelPage;