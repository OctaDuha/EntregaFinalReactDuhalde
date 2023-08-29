import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";
import Image from "./Image";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";

const DetailsItem = (props) => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setDatos([]);

    fetchSimultion(
      productos.filter((flt) => flt.id === idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
      <ul className="productList">
        <li>
          <Link to="/category/Botines">{props.itemUno || "Item Uno"}</Link>
        </li>
        <li>
          <Link to="/category/Pelota">{props.itemDos || "Item Dos"}</Link>
        </li>
        <li>
          <Link to="/category/Guantes">{props.itemTres || "Item Tres"}</Link>
        </li>
        <li>
          <Link to="/category/Canilleras">
            {props.itemCuatro || "Item Cuatro"}
          </Link>
        </li>
      </ul>

      {datos.length === 0 ? (
        <MoonLoader color="#5b00fb" />
      ) : (
        datos.map((items) => (
          <div key={items.id}>
            <div className="containerLeft">
              <Image imagen={items.imageProduct.firtsImage} />
            </div>

            <div className="containerRight">
              <Description
                title={items.title}
                parrafo={items.description}
                cantidad={items.stock}
                precio={items.price}
              />

              <div className="buttons">
                <ButtonDetalles id={items.id} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DetailsItem;
