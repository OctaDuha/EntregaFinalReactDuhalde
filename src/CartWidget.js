import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
