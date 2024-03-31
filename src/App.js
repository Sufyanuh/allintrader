import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/product_detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
