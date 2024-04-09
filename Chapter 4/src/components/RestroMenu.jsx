import React, { useEffect, useState } from 'react';
import { useParams}  from 'react-router-dom'
import { IMG_CDN_URL, MENU_URL } from '../config/constants';

const RestroMenu = () => {
    const[menu ,setMenu]=useState([]);
   const {id}= useParams()
    console.log(id)
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
    
        const response = await fetch(proxyUrl + apiUrl);
        const json = await response.json();
        console.log(json.data);
        const items = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
        setMenu(items);
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4'>
    {menu.map((itemCard, index) => (
        <div key={index} className='border shadow-md w-72 min-h-72 p-4'>
            <img className='w-60 rounded-sm h-[200px]' src={ IMG_CDN_URL + itemCard.card.info.imageId} alt="img" />
            <div className="card-items">
                <h4 className="text-xl">{itemCard.card.info.name}</h4>
                <p className="text-sm">{}</p>
                <p className="text-sm">Rs:{parseFloat(itemCard.card.info.price/100).toFixed(2)}</p>
            </div>
        </div>
    ))}
</div>
  )
}

export default RestroMenu
