import Cart from "components/Cart/Cart";
import Footer from "components/Footer/Footer";
import Home from "components/Home/Home";
import ProductForm from "components/PagesForm/ProductForm";
import TypeForm from "components/PagesForm/TypeForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/m4/" element={<Home />} />
        <Route path="/m4/type" element={<TypeForm />} />
        <Route path="/m4/product" element={<ProductForm />} />
        <Route path="/m4/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/m4/" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
