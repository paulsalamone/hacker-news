import React from "react";
// import Item from './Item';
// import MockData from './hackernews.json'
import "./App.css";

const ItemList = ({ hits }) => {
  console.log(hits);

  return (
    <>
      <main>
        {hits.map((hit) => {
          return (
            <>
              <li>{hit.title}</li>
            </>
          );
        })}
      </main>
    </>
  );
};

export default ItemList;
