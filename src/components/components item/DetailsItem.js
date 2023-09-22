import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../service/firebase";
import { collection, getDoc, query, where } from "firebase/firestore";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import CardItem from "./CardItem";

const DetailsItem = (props) => {
  const [product, setProduct] = useState();
  const { idItem } = useParams();
  // const [producto, setProducto] = useState({});
  const [loader, setLoader] = useState(false);
  // const { id, doc } = useParams();
  const [error, setError] = useState();

  //useEffect(() => {
  //  fetchSimultion(productos.filter((flt) => flt.id === idItem)[0], 2000)
  //    .then((resp) => setProduct(resp))
  //    .catch((error) => error);
  //}, [idItem]);

  useEffect(() => {
    setLoader(true);
    const products = collection(db, "productos");
    getDoc(products)
      .then((res) => {
        const product = res.docs.filter((p) => {
          return p.id === idItem;
        });

        setProduct({ id: product.id, ...product.data() });
      })
      .catch((e) => setError(e))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div className="detailsItem">
      {product && <CardItem product={product} />}
    </div>
  );
};

export default DetailsItem;

/*const ItemCount = ({stock, initial, onAdd})=>
const [quantity, setQuantity] = useState(initial)

const increment = ()=>{
  if(quantity < stock)
    setQuantity(quantity+1)
    }
}

const decrement =() =>{
  if(quantity > 1) {
    setQuantity(quantity - 1)
  }
}

 return(
  <div className="Counter">
    <div className="Controls">
    <button className="Button" onClick={decrement}>-</button>
    <h4 className="Number">{quantity}</h4>
    <button className="Button" onClick={increment}>+</button>
    </div>
    <div>
    )
 }
 */
