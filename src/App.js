import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Product from "./components/Product";
import SearchInput from "./components/SearchInput";
import Sorting from "./components/Sorting";

function App() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortByName, setSortByName] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        applyPagination(data);
      });
  }, []);

  const applySearchFilter = (e) => {
    let filtered = products.map((el) => el);
    filtered = filtered.filter((el) => {
      return (
        el.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    applyPagination(filtered);
  };

  const applyPagination = (arr) => {
    let temp = [];
    for (let i = 0; i < arr.length; i += 5) {
      temp.push(arr.slice(i, i + 5));
    }
    setPages(temp);
  };

  const setSorting = () => {
    let sorted = [];
    pages.forEach((el) => {
      sorted = [...sorted, ...el];
    });
    sorted.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    applyPagination(sorted);
  };

  return (
    <div className="App">
      <h1>Fetch app</h1>
      <hr />
      <div className="search-bar">
        <SearchInput keywordSearch={applySearchFilter} />
        <Sorting action={setSorting} />
      </div>
      <hr />
      <div className="products-list">
        {pages.length > 0 ? (
          pages[currentPage].map((product) => (
            <Product data={product} key={product.id} />
          ))
        ) : (
          <h2>Sorry, no results</h2>
        )}
      </div>
      <hr />
      <Pagination pages={pages} action={setCurrentPage} active={currentPage} />
    </div>
  );
}

export default App;
