import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Libre Mercado
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Categoría 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Categoría 2
              </a>
            </li>
            {/* Agrega más categorías si es necesario */}
          </ul>
        </div>
        <CartWidget itemCount={3} />{" "}
        {/* Reemplaza el número 3 con la cantidad real de elementos en el carrito */}
      </div>
    </nav>
  );
};

export default Navbar;
