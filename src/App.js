import React from "react";
import "./style.css";
import Navbar from "./components/header/NavBar";
import ContainerCardItems from "./components/components item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/items/:id" element={<ContainerCardItems />} />
        <Route path="/category/:idCategory" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
