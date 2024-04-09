import React from 'react'
import { IMG_CDN_URL } from '../config/constants'

const Card = ({
    cloudinaryImageId,name,price,areaName
}) => {
  return (
    <div className='border shadow-md w-72 min-h-72 p-4'>
        <img  className='w-60 rounded-sm h-[200px]' src={IMG_CDN_URL+cloudinaryImageId} alt="img" />
        <div className="card-items">
            <h4 className="text-xl">{name}</h4>
            <p className="text-sm">{areaName}</p>
            {/* <p className="text-sm">Rs:{price}</p> */}
         
        </div>
      
    </div>
  )
}

export default Card
