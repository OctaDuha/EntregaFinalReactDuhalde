import React from "react";
import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido/a a nuestra tienda en línea!" />
      {/* Resto del contenido de la aplicación */}
    </div>
  );
};

export default App;
