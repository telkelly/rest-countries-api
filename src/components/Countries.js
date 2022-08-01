import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v2/all";

const Countries = ({lightMode}) => {
  return (
    <section className="countries">
      <div className={`country ${lightMode ? "lightMode" : ""}`} key="">
        <div className="flag">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
            alt=""
          />
        </div>
        <div className={`details ${lightMode ? 'lightMode' : ''}`}>
          <h3>
            <span>test</span>
          </h3>
          <h4>
            Population: <span>test</span>
          </h4>
          <h4>
            Region: <span>test</span>
          </h4>
          <h4>
            Capital: <span>test</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Countries;
