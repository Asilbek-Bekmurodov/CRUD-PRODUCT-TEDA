import { Routes, Route } from "react-router-dom";
import Auth from "./auth/auth";
import Product from "./components/product";
import Products from "./products/products";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<Product />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
