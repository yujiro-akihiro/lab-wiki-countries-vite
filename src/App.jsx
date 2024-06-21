import React from "react";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage"; // 修正: インポート名を正しく設定
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<CountryDetailsPage />} /> {/* 修正: ルート設定を確認 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
