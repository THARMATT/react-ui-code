# Workflow
- Step 1: Same as [Chapter 2](../Chapter%202/Readme.md) workflow 
- Step 2: Added custom hooks like useOnline, useRestro and use Restuarant for better code readbility.
- useOnline Hook
```js
//useOffline
import { useEffect, useState } from "react"

const useOnline=()=>{
    const [online, setOnline] = useState(true);
    useEffect(() => {
      const handleOnline=()=>{
        setOnline(true)
      }
      const handleOffline=()=>{
        setOnline(false)
      }
        window.addEventListener("online",handleOffline)
      window.addEventListener("offline",handleOffline)
      return(()=>{
        window.removeEventListener("online",handleOffline)
        window.removeEventListener("offline",handleOffline)
      })
    }, [])
   
    return online;
    
}
export default useOnline;
```
- useRestro Hook
```js
//useRestro.js
import { useState, useEffect } from 'react';
import { filterData } from './helper.js';
import { RESTRO_URL } from '../config.js';

const useRestro = () => {
  const [restro, setRestro] = useState([]); // State to hold restaurant data
  const [filterRestro, setFilterRestro] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function getData() {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy URL to bypass CORS
      const apiUrl = RESTRO_URL;
      const response = await fetch(proxyUrl + apiUrl);
      const json = await response.json();
      console.log(json);
      // Extract restaurant data from API response and set state
      setRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Filter the restaurant data whenever the search input or the original data changes
    const filteredData = filterData(searchInput, restro);
    setFilterRestro(filteredData); // Update filtered restaurant data
  }, [searchInput, restro]);

  const handleSearch = () => {
    const filteredData = filterData(searchInput, restro);
    setFilterRestro(filteredData); // Update filtered restaurant data
  };

  return { restro, filterRestro, searchInput,setSearchInput, handleSearch };
}

export default useRestro;
```
- useRestaurant hook
```js
//useRestaurant.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useRestaurant=()=>{
const [menuItems, setMenuItems] = useState([]);
const { id } = useParams();

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

  return menuItems;
}
export default useRestaurant
```
