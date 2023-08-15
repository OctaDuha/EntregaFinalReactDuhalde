import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Libre Mercado</h3>
      <div>
        <button>Celulares</button>
        <button>Ropa</button>
        <button>Electrodomésticos</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
