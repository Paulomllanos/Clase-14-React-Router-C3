import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Account from "../views/Account/Account";
import User from "../views/Admin/User";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import NotFoundPage from "../views/NotFoundPage/NotFounPage";
import Product from "../views/Product/Product";
import Products from "../views/Products/Products";
import Register from "../views/Register/Register";

// Layout envuelve a las otras rutas porque quiero que el navbar este presente siempre
export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
