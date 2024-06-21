import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        "Error fetching the countries data", error;
      });
  }, []);

  return (
    <>
    <Navbar />
    <h1>WikiCountries: Your Guide to the World</h1>
    <ul>
        {countries.map(country => (
            <li key={country.alpha3Code}>{country.name.common}</li>
        ))}
    </ul>
</>
  );
}

export default HomePage;
