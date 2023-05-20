import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./App.scss";
import { ProductsList } from "./components/ProductsList";
import { Route, Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";

export const generateRandomID = () =>
  `123-${Math.floor(Math.random() * 100000)}`;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const PRODUCTS_LIMIT = 20;

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${PRODUCTS_LIMIT}`);
      const { products } = await response.json();
      if(!response.ok) throw Error('Something wwrong with response!');
      setProducts(products);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductsList list={products} />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      
    </div>
  );
}

export default App;
