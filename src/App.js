import "./App.css";
import Header from "./Header";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function App(props) {
  const [items, setItems] = useState([]);

  const example = props.searchTerm;

  const hnApi = `http://hn.algolia.com/api/v1/search?query=${example}`;

  //use effect used to run when component is mounting

  // fetch method using Axios to fetch API
  const fetchData = () => {
    axios
      .get(hnApi)
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(items.hits);

  return (
    <div className="App">
      <Header />

      <ItemList hits={items.hits} />

      {/* <Spinner className="spinner" /> */}

      <Pagination />

      <Footer />
    </div>
  );
}

export default App;
