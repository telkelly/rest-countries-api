import React from "react";
import { useState, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Country from "./components/Country";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const countryInputRef = useRef();
  const continentRef = useRef();
  const navigate = useNavigate();

  const noCountries = countries.status || countries.message;

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

    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  };

  const searchCountry = () => {
    const searchValue = countryInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        );
        const data = await response.json();

        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
    console.log(setCountries);
  };

  const selectContinent = () => {
    const selectValue = continentRef.current.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/region/${selectValue}`
        );
        const data = await response.json();

        if (selectValue === "All") {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }

        setCountries(data);
      };

      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showDetails = (code) => {
    navigate(`/${code}`)
  };

  return (
    <div className={`app ${lightMode ? "lightMode" : ""}`}>
      <Header onClick={switchMode} lightMode={lightMode} />
      <section className="filter">
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
        <div
          name="select"
          id="select"
          className={`region-filter ${lightMode ? "lightMode" : ""}`}
        >
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
            <div className="grid-country">
              {!noCountries ? (
                countries.map((country) => {
                  return (
                    <Country
                      key={country.alpha3Code}
                      code={country.alpha2Code}
                      name={country.name}
                      capital={country.capital}
                      population={country.population}
                      region={country.region}
                      flag={country.flag}
                      lightMode={lightMode}
                      showDetails={showDetails}
                    />
                  );
                })
              ) : (
                <p>No countries found...</p>
              )}
            </div>
          }
        />
        <Route
          path="/:countryCode"
          element={<CountryDetail lightMode={lightMode} countries={countries} />}
        />
      </Routes>
    </div>
  );
}
