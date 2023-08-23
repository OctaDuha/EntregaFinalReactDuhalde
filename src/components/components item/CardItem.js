import Image from "./Image";
import Description from "./Description";
import "../../styles/carditem.css";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "@mui/icons-material/SportsSoccer";

const CardItem = (props) => {
  return (
    <div className="CardItems">
      <Image Image={props.imagen} />
      <Description
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="Buttons">
        <ButtonDetalles />
        <ButtonAddCart />
      </div>
    </div>
  );
};

export default CardItem;
