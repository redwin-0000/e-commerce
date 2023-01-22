import React,{useState, useEffect}from "react";
import {BsFillCartPlusFill} from 'react-icons/bs';
import { useLocation } from "react-router-dom";
import useDataStore from "../store/data.store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/CartStore";

function Cart() {
  const productdata = useDataStore((state) => state.data);
  const [isAddedToCart, setisAddedToCart] = useState(false);
  const location = useLocation();
  const data = location.state.data;
  const addItemToCart = useCartStore((s) => s.addItem);
  const navigate = useNavigate();
 
  
  
  const notifyAddedItem = () => toast(itemAddedmsg,{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const itemAddedmsg = ({ closeToast }) => (
  <div>
    <p className="text-[15px]">{data.title}: Added To Cart</p>
  </div>
  )
  
  useEffect(()=>{
    if(productdata.findIndex((e)=> e.id === data.id)!== -1){
      setisAddedToCart(true)
    }
  },[]);
    return (
    <>
   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h4 className="ml-3 text-xl">E-G Shopping</h4>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" onClick={()=>{navigate("/Cart")}}>Home</a>
    </nav>

    <button  className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-2xl mt-4 md:mt-0" onClick={()=>{navigate("/Wishlist")}}>
     {<BsFillCartPlusFill />}
     <ToastContainer />
    </button>
  </div>
</header>
  <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="" className="lg:w-1/2 w-full lg:h-auto h-40 object-cover object-center rounded" src={data.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.title}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.category}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
          
            <span className="text-gray-600 ml-3">Rating:{ data.rating.rate}</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            {data.rating.count} + people ordered this in the last 7 days.
          </span>
        </div>
        <p className="leading-relaxed">{data.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
          <div className="flex ml-6 items-center">
            <div className="relative">
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹{data.price}</span>


 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" 
 onClick={()=>{
  notifyAddedItem();
  addItemToCart(data);
  //console.log(data);
  setisAddedToCart(!isAddedToCart);
 }}>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    )
  }
  
  export default Cart;