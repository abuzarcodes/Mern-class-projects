import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Home({cart, setCart}) {
  const [products, setProducts] = useState({});
  const [limit, setlimit] = useState(0);
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  
  const [CartOpen, setcartopen] = useState(false);
  async function fetchData() {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}`,
    );
    const data = await response.json();
    setProducts(data);
    setSearchResults(data.products);
  }

  useEffect(() => {
    fetchData();
  }, [limit]);
  console.log(CartOpen)
  function searchProducts(e) {
    const searchedProducts = products.products?.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(searchedProducts);
    console.log(searchResults);
  }
  const navigate = useNavigate();

  function showCartPage() {
    navigate("/cart");
  }
  

  return (
    <div className="App ">
      
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <p className="text-center text-4xl cursor-pointer" onClick={showCartPage}>
        🛒{cart.length}
      </p>
      <div className="flex gap-2 items-center justify-center my-4">
        input limit:{" "}
        <input
          type="number"
          value={limit}
          onChange={(e) => setlimit(e.target.value)}
          className="border border-white/20 p-2 rounded-lg bg-transparent text-white"
        />
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-white/20 p-2 rounded-lg bg-transparent text-white"
        />
        <button
          onClick={searchProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {searchResults.map((product) => (
          <div
            key={product.id}
            className="border border-white/20 p-4 w-80 rounded-lg flex flex-col items-center gap-2 cursor-pointer hover:bg-white/10"
          >
            <img src={product.images[0]} alt="" />
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-white/80">{product.description}</p>
            <p className="text-red-500 font-semibold">${product.price}</p>
            <p className="text-white/80">{product.brand}</p>
            <button
              onClick={() => setCart([...cart, product])}
              
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-amber-100 hover:text-black transition-all duration-300 cursor-pointer"
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home