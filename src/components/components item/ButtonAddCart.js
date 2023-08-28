import React from "react";
import cartWhite from "../../img/cart-white.svg";

const ButtonAddCart = () => {
  return (
    <button id="AddCart">
      <img src={cartWhite} height={50} width={50} alt="Añadir al carrito" />
    </button>
  );
};

export default ButtonAddCart;
