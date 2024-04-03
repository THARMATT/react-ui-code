import React, { useState } from 'react'
import Card from './Card'
import { dummyData } from '../config/constant'

const Body = () => {
  const [dummy,setDummy]=useState(dummyData)
  return (
    <div>
      <div className="searchBar">
        <input  className="search-input" type="text" name="" id="" />
        <button className='search-button'>Search</button>   </div>
        <div className="cards">
          <Card data={dummy}/>
        </div>
   
    </div>
  )
}

export default Body
