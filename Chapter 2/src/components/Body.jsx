import React, { useEffect, useState } from "react";
import Card from "./Card";
import { RESTRO_URL } from "../config/constant"; // Assuming RESTRO_URL is imported from the correct location
import Shimmer from "./Shimmer";

const Body = () => {
  const [restro, setRestro] = useState([]); // State to hold restaurant data
  const [filterRestro, setFilterRestro] = useState([]); // State to hold filtered restaurant data
  const [searchInput, setSearchInput] = useState(""); // State to hold search input value

  // Function to filter restaurant data based on search input
  function filterData(searchInput, restro) {
    const filteredData = restro.filter((restaurant) => {
      return restaurant.info?.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filteredData;
  }

  // Function to handle search button click
  const handleSearch = () => {
    const filteredData = filterData(searchInput, restro);
    setFilterRestro(filteredData); // Update filtered restaurant data
  };

  // Effect hook to fetch restaurant data when component mounts
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch restaurant data from API
  async function getData() {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy URL to bypass CORS
      const apiUrl = RESTRO_URL;
      const response = await fetch(proxyUrl + apiUrl);
      const json = await response.json();
      // Extract restaurant data from API response and set state
      setRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error(error.message);
    }
  }

  return restro.length === 0 ? ( // Render shimmer component while data is being fetched
    <Shimmer />
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
          return <Card key={index} {...restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
