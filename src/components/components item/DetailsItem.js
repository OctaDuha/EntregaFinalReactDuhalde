import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import CardItem from "./CardItem";

const DetailsItem = (props) => {
  const [product, setProduct] = useState();
  const { idItem } = useParams();

  useEffect(() => {
    fetchSimultion(productos.filter((flt) => flt.id === idItem)[0], 2000)
      .then((resp) => setProduct(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
      {product && <CardItem product={product} />}
    </div>
  );
};

export default DetailsItem;
