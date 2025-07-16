import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Country from "./components/Country";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [hideFilter, setHideFilter] = useState(false);
  const countryInputRef = useRef();
  const continentRef = useRef();
  const hideBox = useRef();
  const navigate = useNavigate();

  const switchMode = () => setLightMode(prev => !prev);

  const hidding = (action) => setHideFilter(action !== "back");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca2,cca3"
      );
      const data = await response.json();

      if (data.status === 404) {
        setCountries([]);
        return;
      }

      setCountries(data);
    } catch (error) {
      console.error("Error fetching all countries:", error);
    }
  };

  const searchCountry = () => {
    const searchValue = countryInputRef.current.value.trim();

    if (searchValue) {
      const fetchSearch = async () => {
        try {
          const response = await fetch(
              `https://restcountries.com/v3.1/name/${searchValue}?fields=name,capital,flags,population,region,cca2,cca3`
          );
          const data = await response.json();
          setCountries(data);
        } catch (error) {
          console.error("Error searching countries:", error);
        }
      };

      fetchSearch();
    } else {
      fetchData();
    }
  };

  const selectContinent = () => {
    const region = continentRef.current.value;

    if (region === "All") {
      fetchData();
      return;
    }

    const fetchByRegion = async () => {
      try {
        const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}?fields=name,capital,flags,population,region,cca2,cca3`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching by region:", error);
      }
    };

    fetchByRegion();
  };

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  const noCountries = countries.status || countries.message;

  return (
      <div className={`app ${lightMode ? "lightMode" : ""}`}>
        <Header onClick={switchMode} lightMode={lightMode} />

        <section className={`filter ${hideFilter ? "remove-filter" : ""}`}>
          <form className={`form-control ${lightMode ? "lightMode" : ""}`}>
            <input
                ref={countryInputRef}
                onChange={searchCountry}
                type="search"
                name="search"
                id="search"
                placeholder="Search for a country"
            />
          </form>

          <div className={`region-filter ${lightMode ? "lightMode" : ""}`}>
            <select
                ref={continentRef}
                onChange={selectContinent}
                name="select"
                id="select"
            >
              <option value="All">Filter by region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </section>

        <Routes>
          <Route
              path="/"
              element={
                <div className="grid-country" ref={hideBox}>
                  {!noCountries ? (
                      countries.map((country) => (
                          <Country
                              key={country.cca3}
                              code={country.cca2}
                              name={country.name.common}
                              capital={country.capital}
                              population={country.population}
                              region={country.region}
                              flag={country.flags?.png}
                              lightMode={lightMode}
                              showDetails={showDetails}
                              onClick={hidding}
                          />
                      ))
                  ) : (
                      <p>No countries found...</p>
                  )}
                </div>
              }
          />
          <Route
              path="/:countryCode"
              element={
                <CountryDetail
                    hidding={hidding}
                    lightMode={lightMode}
                    countries={countries}
                />
              }
          />
        </Routes>
      </div>
  );
}
