import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Filter from "./components/Filter";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const [countries, setCountries] = useState([]);

  const switchMode = () => {
    setLightMode((prevState) => !prevState);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    setCountries(data);
  };

  console.log(countries);

  return (
    <div className={`app ${lightMode ? "lightMode" : ""}`}>
      <Header onClick={switchMode} lightMode={lightMode} />
      <Filter lightMode={lightMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="grid-country">
              {countries.map((country) => {
                return (
                  <Country
                    key={country.alpha3Code}
                    code={country.alpha2Code}
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                    flag={country.flag}
                  />
                );
              })}
            </div>
          }
        />
        <Route
          path="country-detail"
          element={<CountryDetail lightMode={lightMode} />}
        />
      </Routes>
    </div>
  );
}
