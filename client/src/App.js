import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import './App.css';
import Home from "./components/homepage/Home";
import ViewProduct from './components/products/ViewProduct';
import Repairs from './components/repairs/Repairs';
import Products from "./components/products/Product";
import Appointment from './components/appointment/Appointment';
import Contact from "./components/appointment/Contact";
import Time from './components/appointment/Time';
import NewProduct from './components/products/NewProduct';
import Register from './components/register/Register';
import Login from './components/register/Login';
import FirstContact from './components/appointment/FirstContact'
import New from './components/products/New';
import Booked from "./components/appointment/Booked";
import ScrollToTop from './scrollToTop';

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/view/:id" element={<ViewProduct />} />
          <Route path="/make-appointment" element={<Appointment />} />
          <Route path="/make-appointment/contact" element={<Contact />} />
          <Route path="/make-appointment/first-contact" element={<FirstContact />} />
          <Route path="/make-appointment/time" element={<Time />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/new-product" element={<NewProduct />} /> */}
          <Route path="/new-product" element={<New />} />
          <Route path="/booked" element={<Booked />} />
        </Routes>
      </Router>
    </div>
  );
}


  // "proxy": "http://localhost:5000",