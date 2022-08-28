import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";

function CountryDetail({ lightMode, countries,  hidding}) {
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

  countries.forEach((country) => {
    if (country.alpha2Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });

      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });

  const goBack = () => {
    navigate("/");
    hidding('back');
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
          <img src={flagImg} alt="" />
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
                {capital !== null ? (
                  <span className="value">{capital}</span>
                ) : (
                  <span className="value">No</span>
                )}
              </p>
            </div>
            <div className="right-info">
              <p>
                Top Level Domain:
                <span className="value">{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                {currencies.length ? (
                  currencies.map((currency) => {
                    if (
                      currencies.indexOf(currency) !==
                      currencies.length - 1
                    ) {
                      return (
                        <span className="value">
                          {""}
                          {currencies},
                        </span>
                      );
                    } else {
                      return (
                        <span className="value">
                          {""}
                          {currencies}
                        </span>
                      );
                    }
                  })
                ) : (
                  <span className="value">No</span>
                )}
              </p>
              <p>
                Languages:
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span key={language} className="value">
                        {""}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span key={language} className="value">
                        {""}
                        {language}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
          <h4 className="border-title">Border Countries:</h4>
          <div className="border-countries">
            {borders.length ? (
              borders.map((border) => (
                <span
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
