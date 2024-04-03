import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">Logo</div>
      <div className="nav-items">
        <Link className='nav-link' to="/">Home</Link> 
        <Link className='nav-link' to="/about">About</Link> 
        <Link className='nav-link' to="/contact">Contact</Link> 
        
       
      </div>
    </div>
  )
}

export default Header
