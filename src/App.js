import React from "react";
import "./style.css";
import Navbar from "./components/header/NavBar";
import ContainerCardItems from "./components/components item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from "./components/components item/DetailsItem";
import ProviderContextCart from "./components/components item/ProviderContextListCart";

function App() {
  return (
    <ProviderContextCart>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContainerCardItems />} />
          <Route path="/items/:idItem" element={<DetailsItem />} />
          <Route
            path="/category/:idCategory"
            element={<ContainerCardItems />}
          />
        </Routes>
      </BrowserRouter>
    </ProviderContextCart>
  );
}

export default App;
