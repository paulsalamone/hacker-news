import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo-new.svg";

const Header = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {}, []);

  // console.log(searchTerm);

  return (
    <>
      <header className="header">
        <div id="logo-text">
          <img src={logo} id="logo" alt="logo" />
          <h1>Hacker News</h1>
        </div>

        {/* <form onSubmit={() => setSearchTerm(searchTerm)}>
          <p id="search">Search: </p>
          <input
            type="text"
            placeholder="enter text"
            id="search-box"
            value={searchTerm}
          ></input>
          <button>Submit</button>
        </form> */}
      </header>
    </>
  );
};

export default Header;
