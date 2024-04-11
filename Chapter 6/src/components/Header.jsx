import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store/store'
import {useSelector} from 'react-redux'
const Header = () => {
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems)
  return (
    <div className='flex bg-yellow-500 p-4 items-center justify-around'>
      <div className="text-white font-serif font-extrabold">Logo</div>
      <div className="nav-items flex  justify-between gap-4 text-white font-semibold">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact" >Contact</Link>
      </div>
      <div className="cart">
        <Link to="/cart" className='bg-white text-yellow-500 w-32  p-2 rounded '>Cart-{cartItems.length}</Link>
      </div>
     
    </div>
  )
}

export default Header
