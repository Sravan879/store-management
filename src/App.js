import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<InvoicePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
