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
