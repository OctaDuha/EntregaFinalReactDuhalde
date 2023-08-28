import React from "react";

const Image = (props) => {
  return (
    <div className="containerImg">
      <img src={props.image} height={100} width={100}></img>
    </div>
  );
};

export default Image;
