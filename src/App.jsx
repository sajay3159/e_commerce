import Cart from "./component/Cart";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/ProductDetail";
import Products from "./component/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Menu from "./component/Menu";
import CustomNavbar from "./component/Navbar";
import RequiredAuth from "./private/RequiredAuth";

// BELOW COMPONENTS

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<RequiredAuth><Cart /></RequiredAuth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
