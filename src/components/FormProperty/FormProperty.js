import React, { useState } from "react";
import Text from "../UI/Heading";
import "../CardProperty/CardProperty.css";
import { useDispatch } from "react-redux";
import { ButtonNavbarWelcome } from "../UI/ButtonNavbarWelcome";
import { colors } from "../UI/ColorStyles";
import FormSale from "../FormSale/FormSale";
import { fetchProperty } from "./PropertiesSlice";
import FormRent from "../FormRent/FormRent";
import { PropertyButtonsStyles } from "./FormPropertyStyles";

const FormProperty = ({ id }) => {
  const [operationType, setOperationType] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    rent: "",
    sale: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProperty(form));
  };

  const { rent, sale } = form;
  return (
    <div>
      <Text type="Montserrat" size="H4" color="balck" textAlign="justify">
        Create a property listing
      </Text>
      <div>
        <Text
          type="Inter"
          size="Caption"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          operation Type
        </Text>
        <PropertyButtonsStyles onSubmit={handleSubmit} id={id}>
          <ButtonNavbarWelcome
            padding="8px 10px"
            margin="0"
            size="14px"
            family="Inter"
            letter="0.25px"
            value={rent}
            nameButton="rent"
            backgroundH={operationType ? colors.LightPink : colors.White}
            background={operationType ? colors.White : colors.Pink}
            colorH={operationType ? colors.DarkGray : colors.Gray}
            color={operationType ? colors.Gray : colors.White}
            borderColorH={colors.Gray}
            borderColor={colors.Gray}
            borderSizeH="1px"
            borderSize="1px"
            BTLR="8px"
            BTRR="0"
            BBLR="8px"
            BBRR="0"
            transform="capitalize"
            onChange={(e) =>
              setForm({ ...form, [e.target.rent]: e.target.value })
            }
            onClick={() => setOperationType(false)}
          />
          <ButtonNavbarWelcome
            padding="8px 10px"
            margin="0"
            size="14px"
            family="Inter"
            value={sale}
            letter="0.25px"
            nameButton="sale"
            backgroundH={!operationType ? colors.LightPink : colors.White}
            background={!operationType ? colors.White : colors.Pink}
            colorH={!operationType ? colors.DarkGray : colors.Gray}
            color={!operationType ? colors.Gray : colors.White}
            borderColorH={colors.Gray}
            borderColor={colors.Gray}
            borderSizeH="1px"
            borderSize="1px"
            BTLR="0"
            BTRR="8px"
            BBLR="0"
            BBRR="8px"
            transform="capitalize"
            onChange={(e) =>
              setForm({ ...form, [e.target.sale]: e.target.value })
            }
            onClick={() => setOperationType(true)}
          />
        </PropertyButtonsStyles>
      </div>
      {operationType ? <FormSale /> : <FormRent />}
    </div>
  );
};

export default FormProperty;
