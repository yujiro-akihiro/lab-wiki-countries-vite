import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        // console.log(response.data);
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
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common}`}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
