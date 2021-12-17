import React, { useEffect } from "react";
import "./App.css";
import Pagination from './Pagination'

const ItemList = ({ data, search, page, setPage }) => {
  

  return (
    <>
      <main>
        {search === ''
        ? <div></div>
        : <p className="results-message">
          Search results for: <b>"{search}"</b>
        </p>
        }
        <Pagination data={data} page={page} setPage={setPage} />
        <div className="items-list">
          {data.hits.map((item, index) => {

            return (
              <div className="headline-item-frame">
                <div key={index} className="headline-item">
                  <a href={item.url} className="headline-title" target="_blank" rel="noreferrer">
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
