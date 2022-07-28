import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function CountryDetail() {
  return (
    <div className="country-detail">
      <button className="btn-back">
        <KeyboardBackspaceIcon /> <p>Back</p>
      </button>

      <div className="country-detail-body">
        <div className="img-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
            alt=""
          />
        </div>
        <div className="info-container">
          <h3>Afganistan</h3>
          <div className="left-info">
            <p>
              Native name:
              <span className="value">test</span>
            </p>
            <p>
              Population:
              <span className="value"></span>
            </p>
            <p>
              Region:
              <span className="value"></span>
            </p>
            <p>
              Sub Region:
              <span className="value"></span>
            </p>
            <p>
              Capital:
              <span className="value"></span>
            </p>
          </div>
          <div className="right-info">
            <p>
              Top Level Domain:
              <span className="value"></span>
            </p>
            <p>
              Currencies:
              <span className="value"></span>
            </p>
            <p>
              Languages:
              <span className="value"></span>
            </p>
          </div>
          <h4 className="border-title">Border Countries:</h4>
          <div className="border-countries">
            <button className="border-country">t</button>
            <button className="border-country">t</button>
            <button className="border-country">t</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
