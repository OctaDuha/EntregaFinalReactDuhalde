import React from "react";
import { Link } from "react-router-dom";

const ButtonDetalles = (props) => {
  return (
    <Link to={`/items/${props.id}`} className="ButtonsDetalles">
      Ver detalles
    </Link>
  );
};

export default ButtonDetalles;
