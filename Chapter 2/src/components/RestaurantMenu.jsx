import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config/constant';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
console.log(id)
  useEffect(() => {
    async function fetchMenuItems() {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
  
      try {
        const response = await fetch(proxyUrl + apiUrl);
  
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
  
        const data = await response.json();
        const items = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
        setMenuItems(items);
        console.log(items);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    }
  
    fetchMenuItems();
  }, [id]);
  

  return menuItems.length===0 ?(<Shimmer/>):(
    <div >
        <div className="menu flex">
            <h1 className='menubar'> Lets Enjoy Your Food</h1>
        </div>
      <div className="menu-cards">
        {menuItems.map((itemCard, index) => (
          <div key={index} className='card'>
             <img  className='card-img' src={IMG_CDN_URL + itemCard.card.info.imageId} alt="" />
            <div className='card-items'>
            <h4>{itemCard.card.info.name}</h4>
           <p>{itemCard.card.info.category}</p>
          </div></div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
