import React, { useState } from 'react'
import { IMG_CDN_URL } from '../config/constant'


const Card = ({cloudinaryImageId,name,avgRating,cuisines,areaName}) => {

  return (
    <div className="card-grid">
     
        <div  className='card'>
        <img className='card-img' src={IMG_CDN_URL + cloudinaryImageId} alt="card-img" />
        <div className="card-items">
          <h3 className="card-name">
            {name }
          </h3>
          <h4 className="author">{areaName}</h4>
          <p className="description">{cuisines.join(', ')}</p>
         
          <p className="author">Ratings:{avgRating}</p>
  
        </div>
        </div>
 
    
    </div>
  )
}

export default Card
