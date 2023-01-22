import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom" 
import useDataStore from './components/store/data.store';
import axios from "axios";
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import WishList from "./components/pages/WishList";
import {toast} from "react-toastify";

function App() {
   const data = useDataStore((state)=>state.data);
   const setData = useDataStore((state)=> state.setData);
   const [isData, setIsData] = useState(" ");

   useEffect(()=>{
    initialState()
    .then((d)=>{
      setData(d);
      setIsData(d);
      console.log(d);
    })
    .catch((e)=>{
      toast.error(e.message || "Network Error")
    });
   },[]);

   const initialState = async()=>{
    try{
      const data = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      return data.data;
    } catch(error){
      return error;
    }
   }
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='Cart' element={<Cart />} />
    <Route path='WishList' element={<WishList />} />
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
