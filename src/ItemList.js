import React, { useEffect } from "react";
import "./App.css";
import Pagination from "./Pagination";

const ItemList = ({ data, search, page, setPage }) => {
  const colour = () => {
    let result = "#";
    var hexValues = ["0", "f"];

    for (let i = 0; i < 6; i++) {
      result += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    console.log(result);
    // result === "#000000" ? (result = "#030001") : (result = "#000000");
    if (result === "#000000") {
      result = "lightgreen";
    }
    console.log(result);
    return result;
  };
  return (
    <>
      <main>
        {search === "" ? (
          <div></div>
        ) : (
          <p className="results-message">
            Search results for: <b id="search-text">"{search}"</b>
          </p>
        )}
        <Pagination data={data} page={page} setPage={setPage} />
        <div className="items-list">
          {data.hits.map((item, index) => {
            return (
              <div
                className="headline-item-frame"
                style={{ backgroundColor: colour() }}
              >
                <div key={index} className="headline-item">
                  <a
                    href={item.url}
                    className="headline-title"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                  <p className="headline-author">Author: {item.author}</p>
                  <p className="headline-url">Source: {item.url}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination data={data} page={page} setPage={setPage} />
      </main>
    </>
  );
};

export default ItemList;
