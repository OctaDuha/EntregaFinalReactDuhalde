import React from "react";
import "./style.css";
import Navbar from "./components/header/NavBar";
import ContainerCardItems from "./components/components item/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from "./components/components item/DetailsItem";
import ProviderContextCart from "./components/components item/ProviderContextListCart";
import { Check } from "@mui/icons-material";
import Checkout from "./components/CheckOut/Checkout";

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
          <Route
            path="/src/components/CheckOut/Checkout.js"
            element={<Checkout />}
          />
        </Routes>
      </BrowserRouter>
    </ProviderContextCart>
  );
}

/*function App(){
  return(
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log("Cantidad agregada, quantity")}/>
      </div>
  )
} */

export default App;
