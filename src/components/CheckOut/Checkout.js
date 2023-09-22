import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ContextCart from "../header/ContextCart";
import { db } from "../../service/firebase";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, total, clear } = useContext(ContextCart);

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
        item: cart,
        price: total,
        date: serverTimestamp,
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, orders)
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {orderId !== "" ? (
        <div>
          <h2>Felicitaciones! Tu orden fue generada con éxito!</h2>
          <h5>Su id de registro es: {orderId}</h5>
        </div>
      ) : (
        <div>
          <h2>Termina compra</h2>
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
