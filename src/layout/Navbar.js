import React, { useState } from 'react'
import cart from '../assets/images/cart.png'
import { Link, NavLink } from 'react-router-dom'
import Buttonn from './buttons/Buttonn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='bg-gray'>
      <div className='container w-4/5 m-auto'>
        <nav className='flex justify-between py-5'>
        <div className='flex'>
            <img className='w-6 h-6 mt-2 mr-1' src={cart} />
          <a href='#' className='text-dark-green font-bold text-2xl font-serif'>gr<span className='text-yellow'>o</span>cery<span className='text-yellow'>.</span></a>
        </div>
        <div>
          <ul className=' text-green font-semibold sm:flex sm:gap-10'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/shop" className='relative' onClick={()=> setIsOpen((prev)=>!prev)} >Shop
            {!isOpen ?(<i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
            ):<i class="fa fa-angle-up ml-2" aria-hidden="true"></i>
            }
            {isOpen && 
            <div className='absolute left-[-60px] p-3 w-[200px] h-[100px] bg-gray leading-3 text-green flex flex-col gap-6 pt-5 text-center'>
              <Link to='/fruit'>Fruit</Link>
              <Link to='/vegetables'>Vegetables</Link>
            </div>
            
            }
            </NavLink>

            {/* <NavLink to="/page" className='relative' onMouseDown={()=> setIsOpen((prev)=>!prev)} >Pages
            {!isOpen ?(<i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
            ):<i class="fa fa-angle-up ml-2" aria-hidden="true"></i>
            }
            {isOpen && 
            <div className='absolute left-[-60px] p-3 w-[200px] h-[100px] bg-gray leading-3 text-green flex flex-col gap-6 pt-5 text-center'>
              <Link to='/page1'>Page1</Link>
              <Link to='/page2'>page2</Link>
            </div>
            
            }
            </NavLink> */}

            <NavLink to="/page" >Pages</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/contact" >Contact</NavLink>

          </ul>

        </div>

        <Buttonn />
            
        </nav>
      </div>
      </div>
    </>
  )
}

export default Navbar