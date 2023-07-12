import React from "react";
API_KEY="XSuJJiwo8S1osKCM5AVXH9ze2tDIe7EC"
const RandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const TagURL=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const useGif = (tag) => {

const [gif,setGif]=useState('');

const [loading,setLoading]=useState(false);

  
  
async function fetchData()
  {

    setLoading(true);
    
    

    const {data}=await axios.get(tag?(TagURL):(RandomURL));

    const imgSrc=data.data.images.downsized_large.url;

    console.log(imgSrc);

    setGif(imgSrc);
    setLoading(false);

  }

useEffect(()=>{
    fetchData();
  },[])

  return {gif,loading,fetchData};
  
  
  
  
  
  
 
};

export default useGif;
