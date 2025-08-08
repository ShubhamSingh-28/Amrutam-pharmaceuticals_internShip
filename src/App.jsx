import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Category from "./components/Category";
import SummerCollection from "./components/SummerCollection";
import MobileAppPromo from "./components/MobileAppPromo";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import IngredientDetails from "./components/IngredientDetails";
import Forum from "./components/Forum";

const HomePage = () => (
  <div className="bg-[#FFF7E2]">
    <Header />
    <Category />
    <SummerCollection />
    <SummerCollection />
    <MobileAppPromo />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ingredient/:name" element={<IngredientDetails />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;
