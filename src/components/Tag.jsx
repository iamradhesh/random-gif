import { useEffect, useState } from "react"
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  const [gif,setGif]=useState('');

  const [loading,setLoading]=useState(false);

  const [tag,setTag]=useState('');
  
  async function fetchData()
  {

    setLoading(true);
    
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const {data}=await axios.get(url);

    const imgSrc=data.data.images.downsized_large.url;

    console.log(imgSrc);

    setGif(imgSrc);
    setLoading(false);

  }

  useEffect(()=>{
    fetchData();
  },[])
  
  
  
  
  function clickHandler(){

      fetchData();
  }

  function changeHandler(event)
  {
    

    setTag(event.target.value);

    console.log(tag);

  }
  
  return (
  <div className=" flex flex-col items-center gap-y-5  mt-[15px] w-1/2  bg-blue-500 rounded-lg border border-black">
  
      <h1 className="font-semibold text-2xl underline uppercase mt-[15px]"> Random {tag} Gif</h1>
      
      {
        loading?(<Spinner/>):(<img src={gif} width="450"/>)
      }
      
      
      <input

        className="w-10/12 bg-white opacity-1 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        autocomplete="off"
        value={tag}
      />

      <button onClick={clickHandler}
      
        className="w-10/12 bg-white opacity-1 text-lg py-2 rounded-lg mb-[15px]">
        
        Generate GIF
        
        </button>
      

  
  
  
  
  
 
  </div>
  )
}
