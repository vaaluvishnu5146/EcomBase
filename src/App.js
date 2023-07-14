import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Page/Products";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Products} />
      </Routes>
    </div>
  );
}
