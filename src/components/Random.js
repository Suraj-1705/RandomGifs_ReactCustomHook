import axios from 'axios';
import Spinner from './Spinner';
import  { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => { 

    // const[ gif ,setGif] = useState('');
    // const [loading , setLoading] = useState(false);
    
    const {gif, loading,getData} = useGif();
    

    // async function getData(){
    //   setLoading(true);
    //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
    <div className='bg-green-700  flex flex-col w-1/2  gap-y-5 items-center rounded-lg mt-[25px] '>
        <h1 className=' mt-[15px] font-bold underline uppercase text-xl'>A RANDOM GIF</h1>
        
        {
          loading ? (<Spinner/>) : (<img src={gif} width="450" />)
        }
        

        <button onClick={() => getData()} 
        className='w-10/12 rounded-lg  py-2 text-lg font-semibold bg-white mb-[20px]'
        >GENERATE</button>
    </div>
  )
}

export default Random