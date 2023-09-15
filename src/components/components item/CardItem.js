import React from "react";
import Image from "./Image";
import Description from "./Description";
import "../../styles/carditem.css";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = ({ product }) => {
  return (
    <div className="cardItem">
      <Image image={product.img} />
      <Description
        title={product.title}
        cantidad={product.stock}
        precio={product.price}
      />
      <div className="buttons">
        <ButtonDetalles id={product.id} />
        <ButtonAddCart id={product.id} />
      </div>
    </div>
  );
};

export default CardItem;
