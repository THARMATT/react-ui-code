import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../config";
import ShimmerUi from "./ShimmerUi";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const menuItems = useRestaurant(id);

  return menuItems.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="menu flex">
        <h1 className="menubar"> Lets Enjoy Your Food</h1>
      </div>
      <div className="menu-cards">
        {menuItems.map((itemCard, index) => (
          <div key={index} className="card">
            <img
              className="card-img"
              src={IMG_CDN_URL + itemCard.card.info.imageId}
              alt=""
            />
            <div className="card-items">
              <h4>{itemCard.card.info.name}</h4>
              <p>{itemCard.card.info.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
