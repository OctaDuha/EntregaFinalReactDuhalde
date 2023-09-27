import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { listCartContext } from "../components item/ProviderContextListCart";
import { db } from "../../service/firebase";
import "../../styles/checkout.css";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { listCart = [], clearCart } = useContext(listCartContext);

  console.log("listCart", listCart);
  console.log("order id", orderId);

  const calcularTotal = () => {
    let totalPrice = 0;

    for (let i = 0; i < listCart.length; i++) {
      const product = listCart[i];

      const subtotal = product.quantity * product.price;

      totalPrice += subtotal;
    }

    return totalPrice;
  };

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name && !user.phone) {
      alert("Campos incompletos");
    } else {
      let orders = {
        user,
        item: listCart,
        price: calcularTotal(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, orders)
        .then((res) => {
          console.log("order set", res.id);
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {orderId !== "" ? (
        <div>
          <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
          <h5>Su id de registro es: {orderId}</h5>
        </div>
      ) : (
        <div>
          <h2>Termina compra</h2>
          <h5>Precio total: {calcularTotal()}</h5>
          <h5>Por favor completar sus datos para continuar</h5>
          <form onSubmit={finalizarCompra}>
            <label className="form-label">Nombre Completo</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="text"
                placeholder="Nombre y Apellido"
                name="name"
              />
            </div>
            <label className="form-label">Número de teléfono</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="number"
                placeholder="+541153675333"
                name="phone"
              />
            </div>
            <label className="form-label">Dirección de email</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="email"
                placeholder="deportete@deportete.com"
                name="mail"
              />
            </div>
            <label className="form-label">Repita su email</label>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="deportete@deportete.com"
                name="mail"
                onChange={(e) => setValidateEmail(e.target.value)}
              />
            </div>
            <button
              className="btn btn-dark"
              type="submit"
              disabled={validateEmail !== user.mail}
            >
              Generar compra
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
