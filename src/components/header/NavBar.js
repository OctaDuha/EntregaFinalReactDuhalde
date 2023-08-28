import React from "react";
import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="containerItemList">
        <ItemListContainer
          itemUno="Botines"
          itemDos="Pelota"
          itemTres="Guantes"
          itemCuatro="Canilleras"
        />
      </nav>
      <div className="containerCart">
        <CardWidget />
      </div>
    </header>
  );
};

export default NavBar;
