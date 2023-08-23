import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardsItems.css";
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory !== undefined) {
      fetchSimulation(productos, 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      fetchSimulation(
        productos.filter((filter) => filter.type == idCategory),
        2000
      )
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);
  return (
    <div className="containerCardItems">
      {datos.map((product) => (
        <CardItem
          key={product.id}
          imagen={product.imageProductos.firtsImage}
          title={product.title}
          cantidad={product.stock}
          precio={product.price}
        />
      ))}
    </div>
  );
};

export default ContainerCardItems;
