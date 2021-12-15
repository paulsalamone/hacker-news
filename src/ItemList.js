import React from "react";
// import Item from './Item';
// import MockData from './hackernews.json'
import "./App.css";

const ItemList = (props) => {
  console.log(props.hits);

  return (
    <>
      {/* <main>
        {props.hits.map((hit) => {
          return (
            <>
              <li>{hit.title}</li>
            </>
          );
        })}
      </main> */}
    </>
  );
};

export default ItemList;
