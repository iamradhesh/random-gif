import { useEffect, useState } from "react"
import axios from "axios";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {

  const [gif,setGif]=useState('');
  
  
  async function fetchData(){

    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const {data}=await axios.get(url);

    const imgSrc=data.data.images.downsized_large.url;

    console.log(imgSrc);

    setGif(imgSrc);

  }

  useEffect(()=>{
    fetchData();
  },[])
  
  
  
  
  function clickHandler(){

      fetchData();
  }
  return (
  <div className=" flex flex-col items-center gap-y-5  mt-[15px] w-1/2  bg-green-500 rounded-lg border border-black">
  
      <h1 className="font-semibold text-2xl underline uppercase mt-[15px]">A  Random Gif</h1>
      <img src={gif} width="450"/>

      <button onClick={clickHandler}
      
        className="w-10/12 bg-white opacity-1 text-lg py-2 rounded-lg mb-[15px]">
        
        Generate GIF
        
        </button>
      

  
  
  
  
  
 
  </div>
  )
}
