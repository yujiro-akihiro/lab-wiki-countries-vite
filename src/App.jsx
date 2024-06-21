import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage title="Home Page" />} />
        <Route path="/:countryId" element={<CountryDetails title="Country Details" />} />
      </Routes>
    </div>
  );
}

export default App;
