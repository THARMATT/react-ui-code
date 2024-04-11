import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
const Body = () => {
  const [Restro, setRestro] = useState([]);

  useEffect(() => {
   getData()
  }, [])

  const getData = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(proxyUrl + targetUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    const json = await response.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRestro(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
  
  

  return (
    <div className='p-10 grid grid-cols-1 sm:grid-cols-4'>
   {
    Restro.map((restaurant,index)=>(
      <Link key={index} to={"restaurant/"+restaurant.info.id}><Card {...restaurant.info}/></Link>
    ))
   }
    </div>
  )
}

export default Body
