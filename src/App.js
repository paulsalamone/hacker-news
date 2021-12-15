import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import ItemList from "./ItemList";

function App(props) {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(async () => {
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${search}`
    );

    setData(result.data);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    setSearch(query);
    setQuery("");
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>

      <ItemList data={data} search={search} />

      <Footer />
    </>
  );
}

export default App;
