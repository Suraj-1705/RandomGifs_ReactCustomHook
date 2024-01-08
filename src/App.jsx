import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  
  <div className="background w-full h-full  relative flex flex-col items-center"> 
      <h1 className="  w-11/12 rounded-lg py-3 text-3xl font-bold text-center bg-white mt-[40px] ">
        RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center justify-center mb-[30px]">
        <Random/>
        <Tag/>
      </div>
  </div>
  );
}
