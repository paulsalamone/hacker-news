import React from "react";
// import Item from './Item';
// import MockData from './hackernews.json'
import "./App.css";

const ItemList = ({ data, search }) => {
  return (
    <>
      <main>
        <p className="results-message">
          Search results for search string: <b>"{search}"</b>
        </p>
        <div className="items-list">
          {data.hits.map((item) => {
            console.log(item);

            return (
              <div className="headline-item-frame">
                <div key={item.objectID} className="headline-item">
                  <a href={item.url} className="headline-title">
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
