import React from "react";
import Image from "./Image";
import Description from "./Description";
import "../../styles/carditem.css";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Image image={props.imagen} />
      <Description
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="buttons">
        <ButtonDetalles />
        <ButtonAddCart />
      </div>
    </div>
  );
};

export default CardItem;
