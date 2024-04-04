import React, { useState } from 'react'


const Card = ({data}) => {

  return (
    <div className="card-grid">
      {data.map((data)=>(
        <div key={data.title} className='card'>
        <img className='card-img' src={data.image} alt="carditems" />
        <div className="card-items">
          <h1 className="card-name">
            {data.title}
          </h1>
          <p className="descr">{data.description}</p>
          <p className="author">{data.author}</p>
  
        </div>
        </div>
      ))}
    
    </div>
  )
}

export default Card
