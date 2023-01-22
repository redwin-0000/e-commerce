import React from 'react';
import fashionImage from '../image/msFashion.png';
import fashion1Image from '../image/fashion1.jpg';
import fashion2Image from '../image/fashion2.jpg';


function MainSection() {
  
    return (
      <section class="text-gray-600 body-font">
        <div class="flex flex-wrap -mt-4 ">
          <div class="p-4 md:w-1/2 w-full flex flex-row gap-4 ml-36">
                <div className='bg-gray-300 h-20 w-20 rounded-full  hover:bg-sky-500 hover:ring-sky-500 hover:text-white cursor-default'>
                 <div className='ml-2 mt-4'>50% off <br/><span className='text-sm ml-2'>fashion</span></div>
                </div>
                <div className='bg-gray-300 h-20 w-20 rounded-full hover:bg-sky-500 hover:ring-sky-500 hover:text-white cursor-default'>
                <div className='ml-2 mt-4'>50% off  <br/><span className='text-sm ml-0'>Electronic</span></div>
                </div>
                <div className='bg-gray-300 h-20 w-20 rounded-full hover:bg-sky-500 hover:ring-sky-500 hover:text-white cursor-default'>
                <div className='ml-2 mt-4'>50% off  <br/><span className='text-sm ml-2'>Clothes</span></div>
                </div>
             </div>
          
        </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discount Fashion Sales</h1>
      <p className="mb-8 leading-relaxed text-base"><span className='font-medium text-5xl'>50% off </span>on your favourite thing </p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-1 md:w-full lg:w-full xl:w-1/2 w-2/4">
        </div>
      </div>
      <div className="flex lg:flex-row md:hidden mt-28 gap-8 ml-10">
      <img className="object-scale-down h-40" alt="hero" src={fashion1Image} />
      <img className="object-scale-down h-40" alt="hero" src={fashion2Image} />
     
      
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:invisible md:visible hover:animate-bounce">
      <img className="object-scale-down w-80 mb-16 ml-20" alt="hero" src={fashionImage} />
    </div>
  </div>
</section>

    );
  }
  
export default MainSection;