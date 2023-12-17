import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/product";
import Cart from "./components/cart";
import Register from "./components/register";
import Contact from "./components/Contact";
import Checkout from "./components/checkout";
import Thanks from "./components/Thanks";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Thanks" element={<Thanks />} />

      </Routes>
    </>
  );
}

export default App;
