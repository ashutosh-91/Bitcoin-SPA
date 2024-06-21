import React, { useState } from 'react'
import dataForTesting from '../assests/DummyData';
import TrendingCoin from '../models/TrendingCoin';

function SideBar() {
const [data,setData]=useState<JSON|null>(null);
//Slicing the array to test for smaller data
const allTrendingCoinsTesting:TrendingCoin[]=dataForTesting.coins.slice(0,3).map(
    (x) => ( {name:x.item.symbol,thumbnail:x.item.thumb,sparkLine:x.item.data.sparkline})
);

const apiKey = process.env.COIN_GEKO;
 async function fetchTrendingCoins(url:string):Promise<JSON | Error> {
     try {
         const response=await fetch(url,{
            headers: {
                Authorization: `Bearer ${apiKey}`, // Use the API key in the header
              }
         });
         if(!response.ok){
            throw new Error(`API request failed with status code ${response.status}`);
         } 
         const dataToJson=response.json();
         setData(await dataToJson);
         return dataToJson;     
     }
     catch(error){
         return JSON;
     }
 } 
    
  return (
    <section className=' w-1/3 '>
    {/* Get Our App section  */}
    <div className='bg-blue-700  p-4 rounded-md'>
        <div className='text-wrap'>
            <h3 className='text-white text-xl font-semibold'>Get Started with TradeX for FREE</h3>
            <p className='text-white text-sm '>With our range of products you can equip for free, TradeX allows you to be more educated and aware of your tax reports.</p>
            <img src="" alt="Some Random Picture" /> 
        </div>
        <a href="" className='bg-white text-black text-sm font-medium p-2 rounded-md w-2/3 '>Get Started for FREE </a>
    </div>

    {/* Trending Section */}
    <div className='bg-[grey] rounded-md p-4'>
        <h3 className='text-xl font-medium pb-2'>Trending Coins (24h)</h3>
        <div >
               {
               allTrendingCoinsTesting.map((coinData,index)=>(
                <div className='flex '>
                   <img src={coinData.thumbnail} alt="" className='rounded-full w-6 h-6'/>
                   <ul className='text-base font-normal p-1'>{coinData.name}</ul>
                   <img src={coinData.sparkLine} alt="" className='w-6 h-6 '/>
                </div>
               ))
               }
        </div>
    </div>

    </section>
  )
}

export default SideBar