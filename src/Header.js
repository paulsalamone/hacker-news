 import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo-new.svg";

const Header = ({search, setSearch, query, setQuery}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${search} submitted!`);
    setSearch(query);
    setQuery("");
  };

  return (
    <>
      <header className="header">
        <div id="logo-text">
          <img src={logo} id="logo" alt="logo" />
          <h1>Hacker News</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
      </header>
    </>
  );
};

export default Header;
