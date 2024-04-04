import React, { useState } from 'react'
import { IMG_CDN_URL } from '../config/constant'


const Card = ({cloudinaryImageId,name,areaName,cuisines}) => {

  return (
    <div className="card-grid">
     
        <div  className='card'>
        <img className='card-img' src={IMG_CDN_URL + cloudinaryImageId} alt="card-img" />
        <div className="card-items">
          <h3 className="card-name">
            {name }
          </h3>
          <p className="description">{cuisines}</p>
          <p className="author">{areaName}</p>
  
        </div>
        </div>
 
    
    </div>
  )
}

export default Card
