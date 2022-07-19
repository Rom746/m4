import Cart from "components/Cart/Cart";
import Footer from "components/Footer/Footer";
import Home from "components/Home/Home";
import ProductForm from "components/PagesForm/ProductForm";
import TypeForm from "components/PagesForm/TypeForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type" element={<TypeForm />} />
        <Route path="/product" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
