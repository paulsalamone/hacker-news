import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ItemList from "./ItemList";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });
  const [page, setPage] = useState("2");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(async () => {
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${search}&page=${page}`
    );

    setData(result.data);
  }, [search]);

  return (
    <>
      <Header
        search={search}
        query={query}
        setSearch={setSearch}
        setQuery={setQuery}
      />

      <>
        {/* <p className="results-message">
          Search results for search string: <b>{search}</b>
        </p> */}

        <ItemList data={data} search={search} />
        {/*         
        <ol>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title !== "" && item.title}</a>
            </li>
          ))}
        </ol> */}
      </>
      <Footer />
    </>
  );
}

export default App;
