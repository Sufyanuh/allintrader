import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import About from "./pages/about";
import Contact from "./pages/contact";
import Easter from "./pages/easter";
import Responsible from "./pages/responsible";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import FAQ from "./pages/faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:type" element={<Products />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/easter" element={<Easter />} />
        <Route path="/responsible" element={<Responsible />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
