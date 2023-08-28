import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/Botines">{props.itemUno}</Link>
      </li>
      <li>
        <Link to="category/Pelota">{props.itemDos}</Link>
      </li>
      <li>
        <Link to="category/Guantes">{props.itemTres}</Link>
      </li>
      <li>
        <Link to="category/Canilleras">{props.itemCuatro}</Link>
      </li>
    </ul>
  );
};

export default ItemListContainer;
