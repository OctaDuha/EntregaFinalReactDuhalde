import React from "react";
import "./App.css";
import Navbar from "./Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
