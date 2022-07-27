import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function CountryDetail() {
  return (
    <div className="country-detail">
      <button className="btn-back">
        <KeyboardBackspaceIcon /> <p>Go Back</p>
      </button>

      <div className="country-detail-body">
        <div className="img-container">
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
