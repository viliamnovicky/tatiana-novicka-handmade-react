import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Customers from "./pages/Customers";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to="/domov"/>}></Route>
            <Route path="domov" element={<Home/>}></Route>
            <Route path="produkty" element={<Products/>}></Route>
            <Route path="zakaznici" element={<Customers/>}></Route>
            <Route path="kontakt" element={<Contact/>}></Route>
          </Route>
            <Route path="*" element={<PageNotFound/>} />
            <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
