import React from 'react'
import CategoryCard from '../components/CategoryCard'
import BestSellersCard from '../components/BestSellersCard';

const HomePage = () => {
  const  categories = [
    {
      name: "Sun",
      img: "/assets/sun.png"
    },
    {
      name: "Rain",
      img: "/assets/rain.png"
    },
    {
      name: "Snow",
      img: "/assets/snow.png"
    },
    {
      name: "All weather",
      img: "/assets/allweather.png"
    },
  ];
  const  bestsellers = [
    {
      name: "Weekend Boot in Scarlet",
      img: "/assets/bestsellers_scarlet.png"
    },
    {
      name: "Anyday Rain Boot in Black",
      img: "/assets/bestsellers_anydayrain.png"
    },
    {
      name: "Weekend Boot in Farrah",
      img: "/assets/bestsellers_farrah.png"
    },
    {
      name: "Terrus Clog in Sage",
      img: "/assets/bestsellers_sage_terrus.png"
    },
  ];
  const presses = ["/assets/oprah.png", "/assets/NYT.png", "/assets/gear.png", "/assets/outside.png"];
  const instaPics = ["/assets/instapic1.png", "/assets/bestsellers_farrah.png", "/assets/instapic3.png", "/assets/instapic4.png",]
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center  bg-shop-all bg-center bg-cover min-h-screen min-w-screen ps-36 tracking-widest'>
        <h2 className='text-2xl text-center opacity-70  text-white '>ShopWave Outdoors</h2>
        <h1 className='text-white text-4xl text-center my-4 '>Verastile. Sustainable. Oh so Comfy!</h1>
        <button className='bg-white text-center  rounded-lg w-fit h-fit hover:opacity-90 hover:scale-105 text-black text-2xl p-2 mx-auto my-2'>Shop Now</button>
      </div>
      <div className='flex flex-col justify-center min-h-screen '>
        <h1 className='px-60 text-green-950 text-5xl text-center  my-6 z-20'>Socially and environmentally progressive outdoor footwear that helps you #BeOutside</h1>
        <div className='flex px-10 my-10'>
          {categories && categories.map((item) => (
            <CategoryCard item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col scale-90 justify-center bg-lookbook bg-cover bg-center min-h-screen px-10 text-center text-white my-6 z-20 tracking-widest">
        <h1 className='text-4xl text-white text-center font-bold my-4'>Spring 2023 Lookbook</h1>
        <h2 className='text-2xl text-white opacity-70 text-center font-normal mb-4 mx-auto w-2/4'>#BeOutside this season, walking to work or lounging in a park.</h2>
        <button className='hover:border-2 hover:border-white mx-auto border-slate-200 border rounded-lg p-2 h-12 w-fit text-white text-xl  bg-none'>
          Explore our lookbook!
        </button>
      </div>
      <div className="min-h-screen text-center flex flex-col justify-center bg-gray-200 z-20">
        <h1 className='text-4xl text-center text-green-950 mx-auto font-medium mb-4'>ShopWave Bestsellers</h1>
        <div className='flex mx-4 my-4'>
          {bestsellers && bestsellers.map((item) => (
            <BestSellersCard item={item}/>
          ))}
        </div>
      </div>
      <div className='min-h-screen min-w-screen text-center flex z-20 justify-center p-12'>
        <div className='text-2xl text-center text-green-950 mx-auto font-normal mb-4 flex flex-col justify-center'>
          <span className='text-green-900 text-4xl'>* * * * *</span><br/>
          "They have a very nice padding in the sole which makes it comfortable to wear for long periods of time and these shoes definitely fit very true to size."<br />
          <br />
          <span className='font-light'>CLAIRE</span>
        </div>
        <div className='flex flex-col justify-start h-fit'>
          <img src="/assets/review_pic.png" alt="review" className='scale-95 transition transform hover:animate-spin duration-5000' />
        </div>
      </div>
      <div className='min-h-fit text-center flex flex-col z-20 justify-center'>
            <h1 className='text-4xl text-green-950 font-medium '>In the Press</h1>
            <div className='flex justify-start'>
              {presses && presses.map(press => (
                <img src={press} alt="press_logo" />
              ))}
            </div>
      </div>
      <div className='flex flex-col justify-center min-h-screen '>
        <h1 className='px-60 text-green-950 text-4xl text-center  my-6 z-20'>Join us on Instagram <span className='underline'>@ShopWave</span></h1>
        <div className='flex px-10 my-10'>
          {instaPics && instaPics.map((item) => (
            <img src={item} alt="pics.png" className='h-96 w-64 rounded-xl mx-4' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
