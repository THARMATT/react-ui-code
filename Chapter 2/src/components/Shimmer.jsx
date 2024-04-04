import React from 'react'

const Shimmer = () => {
    const shimmerCards=new Array(16).fill(null)
  return (
    <div>
      <div className="shimmer-grid">
     {shimmerCards.map((_,index)=>(
        <div className='shimmer' key={index}>
        <div className='shimmer-img' />
        <div className="shimmer-items">
          <h1 className="shimmer-name shimmer-description">
           
          </h1>
          <p className="shimmer-description"></p>
          <p className="shimmer-author"></p>
          <p className="shimmer-date"></p>
  
        </div>
        </div>
     ))}
        
   
    
    </div>
    </div>
  )
}

export default Shimmer
