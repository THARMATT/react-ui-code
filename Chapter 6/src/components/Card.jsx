import React from 'react'

const Card = ({cloudinaryImageId,name,avgRating,areaName}) => {
  return (
    <div className='w-[300px] h-[300px] border outline-none shadow-md p-4 '>
        <img className='w-[98%] h-[200px] rounded ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="card-img" />
        <div className="card-items ">

            <h4>{name}</h4>
             <p>{areaName}</p>
            <p>Ratings:{avgRating}</p>
           
        </div>
      
    </div>
  )
}

export default Card

