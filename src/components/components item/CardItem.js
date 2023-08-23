import Image from "./Image";
import Description from "./Description";
import "../../styles/carditem.css";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "@mui/icons-material/SportsSoccer";

const CardItem = () => {
  return (
    <div className="CardItems">
      <Image Image={ImgPrueba} />
      <Description title="Pelota de futbol" cantidad={50} precio={10000} />
      <div className="Buttons">
        <ButtonDetalles />
        <ButtonAddCart />
      </div>
    </div>
  );
};

export default CardItem;
