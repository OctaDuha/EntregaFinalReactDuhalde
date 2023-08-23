import React from "react";
import "./style.css";
import Navbar from "./components/header/NavBar";
import ContainerCardItems from "./components/components item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/items/:id" element={<ContainerCardItems />} />
        <Route path="/categote/:idCategory" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
