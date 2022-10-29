import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/homepage/Home";
import ViewProduct from './components/products/ViewProduct';
import Repairs from './components/repairs/Repairs';
import Products from "./components/products/Product";
import Appointment from './components/appointment/Appointment';
import Contact from "./components/appointment/Contact";
import Time from './components/appointment/Time';
import Register from './components/register/Register';
import Login from './components/register/Login';
import New from './components/products/New';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/view/:id" element={<ViewProduct />} />
          <Route path="/make-appointment" element={<Appointment />} />
          <Route path="/make-appointment/contact" element={<Contact />} />
          <Route path="/make-appointment/time" element={<Time />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-product" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}