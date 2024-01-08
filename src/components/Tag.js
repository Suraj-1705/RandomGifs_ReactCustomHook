import axios from 'axios';
import Spinner from './Spinner';
import React, { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => { 

    // const[ gif ,setGif] = useState('');
    

    const [tag , setTag] =useState('car');
    const {gif, loading,getData} = useGif(tag);
    // const [loading , setLoading] = useState(false);
    

    // async function getData(){
    //   setLoading(true);
    //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //   const {data} = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   setLoading(false);
    // }
     
    // useEffect( () => {
    //   getData();
    // },[])


    // function clickHandler(){
    //      getData();
    // }

  return (
    <div className='bg-blue-700  flex flex-col w-1/2  gap-y-5 items-center rounded-lg mt-[25px] '>
        <h1 className=' mt-[15px] font-bold underline uppercase text-xl'>RANDOM {tag} GIF</h1>
        
        {
          loading ? (<Spinner/>) : (<img src={gif} width="450" />)
        }
        
        <input 
        className='w-10/12 rounded-lg  py-2 text-lg font-semibold bg-white text-center'
        onChange={ ( (event) => setTag(event.target.value))}
        value={tag}
        
        
        />

        <button onClick={() => getData(tag)} 
        className='w-10/12 rounded-lg  py-2 text-lg font-semibold bg-white mb-[20px]'>
        GENERATE</button>
    </div>
  )
}

export default Tag