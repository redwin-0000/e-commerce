import React from "react";
import useCartStore from "../store/CartStore";
import { useNavigate } from "react-router-dom";

function WishList(){
  const cartData=useCartStore(state=>state.cart)
 // const totalPrice = useCartStore((s) => s.totalPrice);
  const deleteCartItem = useCartStore((s)=>s.removeItem);
  const navigate = useNavigate();

  
// useEffect(() => {
 
//   console.log(cartData);
// }, [])

if (cartData.length === 0) {
  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h4 className="ml-3 text-xl">E-G Shopping</h4>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    
      <a className="mr-5 hover:text-gray-900" href="link">Home</a>
    </nav>

    <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-xl mt-4 md:mt-0 text-white"  onClick={()=>{navigate("/")}}>
      Shop now
    </button>
  </div>
</header>
    <div className="container mx-auto flex items-center justify-center  mt-72">
      <h1 className="text-2xl text-[#242B2E]">Your Cart is empty!</h1>
    </div>
    <div className="container mx-auto flex items-center justify-center  mt-12 ">
      <h1 className="text-2xl text-[#242B2E]">Look like you have not added any things.<br/> Go ahead and add somethings in your cart.</h1>
    </div>
    </>
    
    
  );
}

    return(
      <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <h4 className="ml-3 text-xl">E-G Shopping</h4>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <h2 className="mr-5 ">Cart</h2>
    </nav>

    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-xl mt-42 ml-auto md:mt-0 cursor-pointer" onClick={()=>{navigate("/")}}>
      Home
    </button>
  </div>
</header>
  <div className="container px-5 py-24 mx-auto -mt-24">
    {cartData.map((e)=>(
      <div className="lg:w-4/5 mx-auto flex flex-wrap "  key={e.id}>
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest bg-blue-300">{e.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 bg-blue-400">{e.title}</h1>
        <div className="flex mb-4">
          <a href="none" className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{e.description}</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Rating</span>
          <span className="ml-auto text-gray-900">{e.rating.rate}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹{e.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Place Order</button>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" 
            onClick={() => {
              deleteCartItem(e);
            }}
          >Remove</button>
          
        </div>
        {/* <img alt="ecommerce" className="lg:w-80 w-full lg:h-auto h-80 object-cover object-center rounded ml-28" src={e.image} /> */}
      </div>
      <img alt="ecommerce" className="lg:w-80 w-full lg:h-auto h-80 object-cover object-center rounded ml-28" src={e.image} />
    </div> 
    ))}
  </div>

    </>
    )
}

export default WishList;