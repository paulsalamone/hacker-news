import React from "react";
// import Item from './Item';
// import MockData from './hackernews.json'
import "./App.css";

const colour = () => {
  let result = "#";
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  for (let i = 0; i < 6; i++) {
    result += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  return result;
};

const ItemList = ({ data, search }) => {
  return (
    <>
      <main>
        {search === ''
        ? <div></div>
        : <p className="results-message">
          Search results for: <b id="search-text">"{search}"</b>
        <p className="results-message">
          Search results for: <b>"{search}"</b>
        </p>
        }
        <div className="items-list">
          {/* console.log(data.exhaustiveNbHits); */}

          {data.hits.map((item, index) => {
            return (
              <div
                className="headline-item-frame"
                style={{ backgroundColor: colour() }}
              >
                <div key={index} className="headline-item">
                  <a href={item.url} className="headline-title" target="_blank">
                    {item.title}
                  </a>
                  <p className="headline-author">Author: {item.author}</p>
                  <p className="headline-url">Source: {item.url}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ItemList;
