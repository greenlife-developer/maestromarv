import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/homepage/Home"
import Repairs from './components/repairs/Repairs';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repairs" element={<Repairs />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/book" element={<Book />} /> */}
        </Routes>
      </Router>
    </div>
  );
}