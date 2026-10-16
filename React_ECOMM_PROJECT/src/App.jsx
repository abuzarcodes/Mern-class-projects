import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";



function App() {
  const [cart, setCart] = useState([]);

 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
