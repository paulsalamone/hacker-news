import React from "react";
// import Item from './Item';
// import MockData from './hackernews.json'
import "./App.css";

const ItemList = ({ data, search }) => {
  return (
    <>
      <main>
        {search === ''
        ? <div></div>
        : <p className="results-message">
          Search results for: <b>"{search}"</b>
        </p>
        }
        <div className="items-list">
        {/* console.log(data.exhaustiveNbHits); */}

          {data.hits.map((item, index) => {

            return (
              <div className="headline-item-frame">
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
