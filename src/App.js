import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ItemList from './ItemList';
// import Spinner from '.Spinner';
import Pagination from './Pagination';
import Footer from './Footer';

function App() {
  return (
    <div className="App">

        <Header className="header" />

        <ItemList className="item-list" />

        {/* <Spinner className="spinner" /> */}

        <Pagination className="pagination" />


      <Footer className="footer" />
      
    </div>
  );
}

export default App;
