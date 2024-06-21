import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
        // console.log(response.data); データ構造を確認するためにログに出力
      })
      .catch((error) => {
        console.error("Error fetching the country data:", error);
      });
  }, [countryId]);

  if (!country) {
    return <div>Loading...</div>; // Loading OPT
  }

  return (
    <div>
      <h2>Country Details</h2>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Borders:</p>
      <ul>
        {country.borders.map((border) => (
          <li key={border}>{border}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;
