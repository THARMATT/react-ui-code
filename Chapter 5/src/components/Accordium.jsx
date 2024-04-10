import React, { useState } from 'react'

const Accordium = ({title,description,isVisible,setIsVisible}) => {
    
    console.log("render")
  return (
    <div>
      <div className="border m-6 p-6 bg-slate-200">
        <h1 className='font-bold'>{title}</h1>
     {isVisible && <p className=''>{description}</p>} 
     {isVisible?(    <button className='bg-red-400 rounded m-2 font-bold p-2 ' onClick={()=>{setIsVisible(false)}}>hide</button>
     ):( <button className='bg-green-400 rounded font-bold p-2  ' onClick={()=>{setIsVisible(true)}}>Show</button>)}  
       
     </div>
      
    </div>
  )
}

export default Accordium
