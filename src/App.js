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
  const [loading, setLoading] = useState(true);

  

  const fetchData = async () => {
    await axios
      .get(`https://hn.algolia.com/api/v1/search?query=${search}&page=${page}&hitsPerPage=18`)
      .then((response) => {
          setData(response.data);
      })
      .catch((error) => alert(error));
      setLoading(false);

  };

  useEffect(() => {
    fetchData();
  }, [search]);




  return (
    <>
      <Header
        search={search}
        query={query}
        setSearch={setSearch}
        setQuery={setQuery}
      />
      {loading 
      ? <div className="container">
          <div className="row">
            <div className="col-4"></div>
              <div className="col-4">
                <div style={{height: '300px'}}></div>
                <div style={{textAlign: 'center', height: '2000px'}}>
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      : search === "" 
      ? 
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
            <div className="col-4">
              <div style={{height: '300px'}}></div>
              <div style={{textAlign: 'center', height: '2000px'}}>
                <div className="text-light">
                  <span className="">Please provide a search term ...</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      : data.nbHits === 0
      ? 
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
            <div className="col-4">
              <div style={{height: '300px'}}></div>
              <div style={{textAlign: 'center', height: '2000px'}}>
                <div className="text-light">
                  <span className="">We tried our best,<br />
                  but couldn't find anything!</span>
                </div>
              </div>
          </div>
        </div>
    </div>
    : <ItemList data={data} search={search} />
      }
    
      <Footer />
    </>
  );
}

export default App;
