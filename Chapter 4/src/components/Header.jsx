import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/img/logo.svg'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 h-20 shadow-md '>
      <div className="logo">
        <img className='logo-img w-20' src={logo} alt="logo" />
      </div>
      <div className="flex justify-around gap-4">
        <Link className='nav-link' to="/">Home </Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="contact">Contact</Link>
        
      </div>
      <Link className='nav-link'><button>Cart</button></Link>


     
    </div>
  )
}

export default Header
