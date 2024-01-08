import React from 'react';
import axios from 'axios';
import  { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;




const useGif = (tag) => {
    const[ gif ,setGif] = useState('');
   
    const [loading , setLoading] = useState(false);
    // const TagMemeUrl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    

    async function getData(tag){
      setLoading(true);
      
      const {data} = await axios.get(tag ? (`${url}&tag=${tag}`) : (url));
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
     
    useEffect( () => {
      getData('car');
    },[])

    return {gif,loading,getData}
   
}

export default useGif;