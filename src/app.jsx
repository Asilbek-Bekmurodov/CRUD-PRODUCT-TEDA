import { Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/auth";
import Product from "./components/product";
import Products from "./pages/products";
import Add from "./pages/add";
import Edit from "./pages/edit";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<Product />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
