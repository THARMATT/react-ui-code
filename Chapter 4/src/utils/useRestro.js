import { useEffect, useState } from "react";
import { RESTRO_URL } from "../config/constants";

const useRestro=()=>{
   try {
     const [Restro, setRestro] = useState([]);
 
     useEffect(() => {
      getData()
     }, [])
      async function getData(){
         const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
         const apiUrl = RESTRO_URL;
         const response = await fetch(proxyUrl + apiUrl);
         const json = await response.json();
         console.log(json.data);
         setRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     //   setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
      }
      return Restro
   } catch (error) {
    console.error(error.message)
   }
    
}
export default useRestro