import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
      
  <div > <img className="title" src="https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo-1993-2010.png" alt="logo" /></div>

        <div className="nav-items">
          <ul>
           
            <li>     <Link  className='link' to="/">Home </Link></li>
            <li>     <Link className='link' to="/contact">Contact us</Link></li>
            <li>     <Link className='link' to="/about">About us</Link></li>
       
            <div>

      {isLoggedIn ? (
        <button  className="nav-button" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="nav-button" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

    </div>
          </ul>
        </div>
      </div>

    </>
  )
}
export default HeaderComponent
