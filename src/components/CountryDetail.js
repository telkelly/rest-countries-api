import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";

function CountryDetail({ lightMode, countries, hidding }) {
  const params = useParams();
  const navigate = useNavigate();

  const selectedCountry = countries.find(
      (country) => country.cca2 === params.countryCode
  );

  if (!selectedCountry) {
    return <p>Loading country details...</p>;
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = selectedCountry;

  const nativeName = name.nativeName
      ? Object.values(name.nativeName)[0]?.common
      : name.common;

  const currencyList = currencies
      ? Object.values(currencies).map((currency) => currency.name)
      : [];

  const languageList = languages ? Object.values(languages) : [];

  const goBack = () => {
    navigate("/");
    hidding("back");
  };

  return (
      <div className="country-detail">
        <button
            className={`btn-back ${lightMode ? "lightMode" : ""}`}
            onClick={goBack}
        >
          <KeyboardBackspaceIcon /> <p>Back</p>
        </button>
        <div className="country-detail-body">
          <div className="img-container">
            <img src={flags.png} alt={`${name.common} flag`} />
          </div>
          <div className="info">
            <h3>{name.common}</h3>
            <div className="info-container">
              <div className="left-info">
                <p>
                  Native Name: <span className="value">{nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className="value">
                  {population.toLocaleString("en-US")}
                </span>
                </p>
                <p>
                  Region: <span className="value">{region}</span>
                </p>
                <p>
                  Sub Region: <span className="value">{subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="value">
                  {capital?.[0] || "No capital"}
                </span>
                </p>
              </div>
              <div className="right-info">
                <p>
                  Top Level Domain:{" "}
                  <span className="value">{tld?.[0] || "N/A"}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className="value">
                  {currencyList.length ? currencyList.join(", ") : "No"}
                </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className="value">
                  {languageList.length ? languageList.join(", ") : "No"}
                </span>
                </p>
              </div>
            </div>
            <h4 className="border-title">Border Countries:</h4>
            <div className="border-countries">
              {borders?.length ? (
                  borders.map((border) => (
                      <span
                          key={border}
                          className={`border-country ${lightMode ? "lightMode" : ""}`}
                      >
                  {border}
                </span>
                  ))
              ) : (
                  <p>No borders...</p>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default CountryDetail;
