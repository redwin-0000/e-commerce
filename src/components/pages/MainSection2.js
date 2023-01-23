import React,{ useEffect, useState}  from 'react';

import { useNavigate } from "react-router-dom";
import useDataStore from "../store/data.store";


function MainSection2() {
const [active, setIsActive] = useState(false);

const data = useDataStore((state) => state.data);
const navigate = useNavigate();

useEffect(()=>{
  setIsActive("green");
},[])
  return (
    <>
    <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Collections</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!.</p>
      </div>
    <div className=" container mx-auto flex justify-center items-center  font-serif flex-wrap  gap-3 bg-[#ffffff]">
   
      {data.map((e,i) => (
        <div className=" w-[300px] h-[400px] flex items-start justify-center px-3 flex-col border-2 ">
        
           <button 
            style={{ backgroundColor: active ? "gray" : "red" }} class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-100 ml-56">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <img key={i} onClick={()=>{navigate("/Cart",{state:{data:e} });}}  src={e.image} alt="" className="h-52 px-10  self-center hover:-translate-y-1"/>
          <h3 className="text-[#48474a]">{e.category}</h3>
          <h3 className="text-[#6A1B4D] text-md hover:translate-x-1">{e.title}</h3>
          <h3>
            Rating: <span className="text-[#DDD101]">{e.rating.rate}</span>
          </h3>
          <h3 className="text-[#2e0066] text-2xl hover:translate-x-1">₹{e.price}</h3>
        <div className='ml-28 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
        </div>
        </div>
   
      ))}
    </div>
    </>
  );
}

export default MainSection2;