import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
        // console.log(response.data);  check Data structure
      })
      .catch((error) => {
        console.error("Error fetching the country data:", error);
      });
  }, [countryId]);

  if (country === null || country === undefined) {
    return <div>Loading...</div>; // Loading OPT.
  }

  return (
    <div>
      <h2>Country Details</h2>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Borders:</p>
      <ul>
        {country.borders.length > 0 ? (
          country.borders.map((border) => (
            <li key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </li>
          ))
        ) : (
          <li>No borders</li>
        )}
      </ul>
    </div>
  );
}

export default CountryDetailsPage;
