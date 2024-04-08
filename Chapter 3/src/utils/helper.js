export function filterData(searchInput, restro) {
    const filteredData = restro.filter((restaurant) => {
      return restaurant.info?.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return filteredData;
  }