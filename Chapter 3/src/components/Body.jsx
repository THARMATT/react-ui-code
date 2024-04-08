import React, { useEffect, useState } from "react";
import RestroCard  from "./RestroCard";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import useRestro from "../utils/useRestro";
import useOnline from "../utils/useOnline";

const Body = () => {
  const { restro, filterRestro,searchInput, setSearchInput, handleSearch } = useRestro(); 
const online=useOnline();
if(!online){
  return <div className="offline">
    <h1> Hlo ji Tussi Offline ho</h1>
  </div>
}
  return restro.length === 0 ? ( // Render shimmer component while data is being fetched
  <ShimmerUi />
) : (
    <div>
      {/* Search bar */}
      <div className="searchBar">
        <input
          className="search-input"
          onChange={(e) => {
            setSearchInput(e.target.value); // Update search input value
          }}
          value={searchInput}
          type="text"
          name=""
          id=""
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>{" "}
      </div>
      {/* Render restaurant cards */}
      <div className="cards">
        {filterRestro.map((restaurant, index) => { // Render filtered restaurant data
          return <Link className="card-link" to={"/restaurant/"+ restaurant.info.id} key={index}> <RestroCard  {...restaurant.info} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
