import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import useRestro from '../utils/useRestro';
import Shimmer from './Shimmer';

const Body = () => {
   const Restro=useRestro()
  return Restro.length===0?(<Shimmer/>):(
    <div className='h-full w-full p-12'>
      <div className="search">

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Restro.map((restaurant,index)=>(

            <Link key={index} to={"/restaurant/"+ restaurant.info.id} ><Card  {...restaurant.info}/></Link>
        ))}
      </div>
    </div>
  )
}

export default Body
