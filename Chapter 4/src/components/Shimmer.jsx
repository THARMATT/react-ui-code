import React from 'react'
const Shimmer = () => {
    const shimmer=new Array(16).fill(null)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 p-4'>
    {shimmer.map((_,index)=>(
<div className="" key={index}>
   
<div  className='border shadow-md w-72 min-h-72 p-4'>
<div  className='w-60 rounded-sm h-[200px]'  />
<div className="card-items">
    <h4 className="text-xl"></h4>
    <p className="text-sm"></p>
    <p className="text-sm"></p>
 
</div>
</div>
</div>))}
    </div>
  )
}

export default Shimmer
