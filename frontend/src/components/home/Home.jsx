import React, { useState } from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import SearchFilter from "../search/SearchFilter"

const Home = () => {
  const [searchFilters, setSearchFilters] = useState({});
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleFilterChange = (filters) => {
    setSearchFilters(filters);
    // In a real app, this would filter the properties based on the filters
    // For now, we'll just pass the filters to the Recent component
  };

  return (
    <>
      <Hero />
      <div className="container">
        <SearchFilter 
          onFilterChange={handleFilterChange} 
          properties={filteredProperties}
        />
      </div>
      <Featured />
      <Recent searchFilters={searchFilters} />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home
