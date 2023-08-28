import { Link } from "react-router-dom";
import React from "react";
import cart from "../../img/brand.svg";

const Brand = () => {
  return (
    <Link to="/">
      <img
        src={cart}
        alt="Deportete"
        width={70}
        height={70}
        title="Deportete"
      />
    </Link>
  );
};

export default Brand;
