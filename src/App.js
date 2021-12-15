import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function App(props) {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const example = "iPhone";

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
      <p className="results-message">
        Search results for search string: <b>"{search}"</b>
      </p>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      <Footer />
    </>
  );
}

export default App;
