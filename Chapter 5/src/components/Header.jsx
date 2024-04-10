import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'


const Header = () => {
  const [first, setfirst] = useState()
  const {user,setUser}=useContext(UserContext)
  return (
    <div className='flex items-center justify-between p-4 h-20 shadow-md '>
      <div className="logo">
        <span className='logo-img w-20' src="" alt="logo" >Logo JI</span>
      </div>
      <div className="flex justify-around gap-4">
        <Link className='nav-link' to="/">Home </Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="contact">Contact</Link>
        
      </div>
      <Link className='nav-link bg-yellow-500 p-2 m-2 w-20 font-bold text-white rounded'><button>{user.name}</button></Link>

<input type="text" value={user.name}  onChange={(e)=>(setUser({
 name: e.target.value,
 gmail:"kk"
}))}/>
     
    </div>
  )
}

export default Header
