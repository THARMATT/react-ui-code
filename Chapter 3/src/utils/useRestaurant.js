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