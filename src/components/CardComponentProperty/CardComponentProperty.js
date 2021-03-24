import React from "react";
import DefaultImage from "../../Images/DefaultImage.svg";
import Icons from "../UI/Icons";

const CardComponentProperty = () => {
  return (
    <div>
      <h1>Card Component Property</h1>
      <img src={DefaultImage} alt="Aparment" />
      <Icons type="price" color="red" />
    </div>
  );
};

export default CardComponentProperty;
