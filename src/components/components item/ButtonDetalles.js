import React from "react";
import { Link } from "react-router-dom";

const ButtonDetalles = (props) => {
  return (
    <Link to={`/item/${props.id}`} className="ButtonsDetalles">
      Ver detalles
    </Link>
  );
};

export default ButtonDetalles;
