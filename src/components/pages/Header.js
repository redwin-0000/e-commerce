// import "./Header.css"
import React from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs' 
import { useNavigate } from "react-router-dom";
function Header() {

   const navigate = useNavigate();
    return (
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h4 className="ml-3 text-xl">E-G Shopping</h4>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href='cart' className="mr-5 hover:text-gray-900 cursor-pointer"  onClick={()=>{navigate("/Cart")}}>Home</a>
    </nav>

    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-xl mt-4 md:mt-0 cursor-pointer" onClick={()=>{navigate("/Wishlist")}}>
      
      {<BsFillCartPlusFill/>}
    </button>
  </div>
</header>
    );
  }
  
  export default Header;