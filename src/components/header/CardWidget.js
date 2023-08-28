import React from "react";
import cart from "../../img/cart.svg";

const CardWidget = () => {
  return (
    <div className="containerLength">
      <img src={cart} alt="cart" width={20} height={20}></img>
      <span className="cantCart">1</span>
    </div>
  );
};

export default CardWidget;
