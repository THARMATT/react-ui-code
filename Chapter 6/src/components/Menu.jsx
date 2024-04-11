import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../store/CartSlice";
import store from "../store/store";
import { useSelector, useDispatch } from "react-redux";
const Menu = () => {
  const { id } = useParams();
  const [Menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  function handleClick(item) {
    dispatch(addItem(item));
    console.log('clicked')
    console.log(item)
  }
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
    const response = await fetch(proxyUrl + apiUrl);
    const json = await response.json();
   
    setMenu(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards || []
    );
  }
  return (
    <>
      {Menu.map((menuItems, index) => (
        <div className="menuItems" key={index}>
          <div className="flex items-center  w-[600px]  ml-10  p-2">
            <img
              className="w-[90%] h-[200px] rounded m-2"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                menuItems.card.info.imageId
              }
              alt=""
            />
            <div className="menu-items flex flex-col gap-2 w-96">
              <h1 className="font-bold">{menuItems.card.info.name}</h1>
              <p className="font-semibold">
                Rs:{parseFloat(menuItems?.card?.info?.price / 100)}
              </p>
            </div>
            <button
              onClick={() => handleClick(menuItems.card.info.item)}
              className="bg-yellow-500 h-10 m-2 text-white dont-bold rounded w-40"
            >
              Add
            </button>
          </div>
          <div className="border shadow-md w-screen"></div>
        </div>
      ))}
    </>
  );
};

export default Menu;
