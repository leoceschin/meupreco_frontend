import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./App.css";
import Product from "./Product";
import Products from "./Products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('//api.localhost:8080/manga/all');
      setProducts(data);  
    };
    fetchProducts();

  }, []);

  return (
    <>
      <div className="container">
        <Products 
          products={products}
        />
      </div>

    </>
  )
}

export default App;