import React, { useEffect, useState } from 'react'
import Card from './Card'
import { MENU_URL, dummyData } from '../config/constant'
import Shimmer from './Shimmer'

const Body = () => {
  const [dummy,setDummy]=useState(dummyData)
  const [searchInput,setsearchInput]=useState('');
  function filterData(searchInput,dummy){
    const filteredData= dummy.filter((restro)=>{
      return restro.title?.toLowerCase()?.includes(searchInput?.toLowerCase());
     })
     return filteredData
   }

  const handleSearch=()=>{
const filteredData=filterData(searchInput,dummy);
setDummy(filteredData)
  }

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    try {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=330424&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER';
      const response = await fetch(proxyUrl + apiUrl);
      const json = await response.json();
      console.log(json.data);
      
  } catch (error) {
      console.error(error.message);
  }
  }
 
  
  return (
    <div>
      <div className="searchBar">
        <input  className="search-input" onChange={(e)=>{setsearchInput(e.target.value)}}  value={searchInput} type="text" name="" id="" />
        <button className='search-button' onClick={
          handleSearch
        }>Search</button>   </div>
        <div className="cards">
          <Card data={dummy}/>
          
        </div>
        {/* <Shimmer/> */}
    </div>
  )
}

export default Body
