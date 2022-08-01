import React from "react";

export default function Filter({ lightMode }) {
  return (
    <section className="filter">
      <form className={`form-control ${lightMode ? "lightMode" : ""}`}>
        <input
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
        <select name="select" id="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}
