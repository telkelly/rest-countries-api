import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setContries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setContries(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="countries">
        {countries.map((country) => {
          const {
            flag,
            name,
            callingcode,
            population,
            region,
            capital,
          } = country;

          return (
            <div className="country" key={callingcode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="details">
                <h3>
                  <span>{name}</span>
                </h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
