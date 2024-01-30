import React from 'react'
import Navbar from '../../layout/Navbar'

import shape from '../../assets/images/bannerShape.png'
import bannerImg from '../../assets/images/bannerImg.png'
import onion from '../../assets/images/onion.png'
import egg from '../../assets/images/egg.png'
import milk from '../../assets/images/milk.png'
import cucumber from '../../assets/images/cucumber.png'

import Sliderr from './components/Sliderr'



const Home = () => {
  return (
    <>
        <section className='bg-gray'>
    <div className='container w-4/5 m-auto'>
          <div className='flex pt-10'>
         <div className='py-[250px] w-1/2'>
          <h2 className='text-dark-green text-[3.5rem] font-bold leading-[4rem] '>Eat <span className='text-yellow'>Fresh</span> & <span className='text-yellow'>Safe</span> Food to Enjoy  Healthy Life</h2>

          <p className='text-base text-dark-green pt-6 pb-8 font-semibold'>Lorem ipsum dolor sit amet consectetur. Elementum proin odio tincidunt viverra. Mollis vitae lorem tempor pellentesque mi mauris quisque ac. Nibh placerat augue eget iaculis bibendum augue lacus. Eu quisque auctor laoreet q</p>
          <a className='text-white bg-yellow hover:bg-dark-green px-6 py-3.5 rounded-md font-semibold'>Start Shopping</a>
          <a className=' relative ml-7 border-solid border-2 border-yellow px-6 py-3.5 rounded-md font-semibold text-dark-green '>
          <span className='mr-6'><i class="fa-solid fa-circle-play text-yellow text-3xl mr-2 absolute top-0 left-0 translate-y-1.5 translate-x-3"></i></span>Order Process</a>
         </div>
         <div className='w-1/2 relative'>
          <img src={shape} className='w-5/6 ml-auto '/>
          <img src={bannerImg} className='absolute top-[84px] w-5/6 m-auto right-0'/>
         </div>
         </div>
    </div>
        </section>




        <section>
          <div className='container w-4/5 m-auto py-24'>
            <div className='text-center'>
              <h3 className='text-dark-green text-[48px] font-semibold'>Browse All Categories </h3>
              <p className='text-dark-green text-base'>Lorem ipsum dolor sit amet consectetur. Proin curabitur at ipsum ullamcorper velit.</p>
            </div>

          </div>
          <Sliderr />

          <div className='container w-4/5 m-auto'>

          <div className='flex gap-5 mb-[100px]'>
            <div className='bg-gray w-2/5 p-7 rounded-md'>
              <div>
                <p className='text-yellow text-[20px] font-semibold mb-2'>GET 15% OFF</p>
                <h4 className='text-dark-green text-[32px] font-semibold leading-10 w-[320px]'>We Ensure You to 
                  Pesticide Free 
                  products</h4>
                  <button className='bg-green py-2 px-4 mt-5 rounded-md'>
                  <a href='#' className='text-white text-[13px] font-semibold'>Start Shopping</a>
                  </button>
              </div>
              <div className='flex justify-center'>
                <img src={onion} />
              </div>

            </div>
            <div className='w-3/5 flex flex-col gap-5'>
              <div className='bg-gray p-7 rounded-md flex gap-10 py-11'>
                <div>
                  <img src={milk} />
                </div>
                <div>
                <p className='text-yellow text-[20px] font-semibold mb-2'>GET 20% OFF</p>
                <h4 className='text-dark-green text-[32px] font-semibold leading-10 '>Start Your day with 
                    Our Pure Dairy Products</h4>
                    <button className='bg-green py-2 px-4 mt-5 rounded-md'>
                  <a href='#' className='text-white text-[13px] font-semibold'>Start Shopping</a>
                  </button>
                </div>
              </div>
              
              <div className='bg-pink p-7 flex gap-10 rounded-md py-11'>
                <div>
                  <img src={egg} />
                </div>
                <div>
                <p className='text-yellow text-[20px] font-semibold mb-2'>GET 12% OFF</p>
                <h4 className='text-dark-green text-[32px] font-semibold leading-10 w-[250px]'>Make Everyday 
                    Fresh & Healthy</h4>
                    <button className='bg-green py-2 px-4 mt-5 rounded-md'>
                  <a href='#' className='text-white text-[13px] font-semibold'>Start Shopping</a>
                  </button>
                </div>
              </div>

            </div>
            </div>
            </div>
          

        </section>


        <section className='bg-gray py-[100px]'>
          <div className='container w-4/5 m-auto'>
          <div>
            <div className='text-center'>
              <h3 className='text-dark-green text-[48px] font-semibold'>Best Seller This Month </h3>
              <p className='text-dark-green text-base'>Lorem ipsum dolor sit amet consectetur. Proin curabitur at ipsum ullamcorper velit.</p>
            </div>

           <div className='mt-[80px]'>
            <div className='bg-white flex w-1/4 flex-col p-5 rounded-md'>
            <div className='flex justify-between'>
                    <p className='p-4 text-yellow bg-red-400'>50% Off</p>
                    <div className='flex flex-col'>
                    <i class="fa-regular fa-eye text-green bg-gray py-1 px-2 rounded-sm mb-3"></i>
                    <i class="fa-regular fa-heart text-green bg-gray py-1 px-2 rounded-sm mb-3"></i>
                    </div>
                  </div>
                <div className='flex flex-col justify-center items-center'>
                <div>
                  <img src={cucumber} />
                </div>
                <div className='text-center py-3'>
                  <p className='text-[14px] text-dark-green font-semibold'>Organic Cucumber</p>
                  <p className='text-[14px] text-dark-green font-semibold'>Available in - 500gm</p>
                  <p className='text-[14px] text-yellow font-semibold'>$4.00 <span className='line-through text-[14px] text-dark-green font-semibold ml-1'>$8.00</span></p>
                </div>
                <button className='text-white text-semibold text-[13px] bg-green py-2 px-4 rounded-md'>Add to Cart</button>
                </div>
            </div>
           </div>
         





            </div>


              
              
            </div>
        </section>



        </>

  )
}

export default Home