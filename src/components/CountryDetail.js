import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from 'react-router-dom';

function CountryDetail({ lightMode, countries}) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach(country => {
    if (country.alpha2Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies.forEach(currency => {
        currencies.push(currency.name)
      })

      country.languages.forEach((language) => {
        languages.push(language.name);
      });
    }
  });

  const goBack = () => {
    navigate('/');
  }

  return (
    <div className="country-detail">
      <div className="country-detail-body">
        <div className="img-container">
          <img
            src={flagImg}
            alt=""
          />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <div className="info-container">
            <div className="left-info">
              <p>
                Native name:
                <span className="value">{nativeName}</span>
              </p>
              <p>
                Population:
                <span className="value">{population}</span>
              </p>
              <p>
                Region:
                <span className="value">{region}</span>
              </p>
              <p>
                Sub Region:
                <span className="value">{subregion}</span>
              </p>
              <p>
                Capital:
                <span className="value">{capital}</span>
              </p>
            </div>
            <div className="right-info">
              <p>
                Top Level Domain:
                <span className="value">{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                <span className="value">{currencies}</span>
              </p>
              <p>
                Languages:
                <span className="value">{languages}</span>
              </p>
            </div>
          </div>
          <h4 className="border-title">Border Countries:</h4>
          <div className="border-countries">
            <button
              className={`border-country ${lightMode ? "lightMode" : ""}`}
            >
              t
            </button>
            <button
              className={`border-country ${lightMode ? "lightMode" : ""}`}
            >
              t
            </button>
            <button
              className={`border-country ${lightMode ? "lightMode" : ""}`}
            >
              t
            </button>
          </div>
        </div>
      </div>
      <button className={`btn-back ${lightMode ? "lightMode" : ""}`} onClick={goBack}>
        <KeyboardBackspaceIcon /> <p>Back</p>
      </button>
    </div>
  );
}

export default CountryDetail;
