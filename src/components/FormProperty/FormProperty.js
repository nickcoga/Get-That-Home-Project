import React from "react";
import Text from "../UI/Heading";
import "../CardProperty/CardProperty.css";
import ButtonNavbarWelcome from "../UI/ButtonNavbarWelcome";
import { colors } from "../UI/ColorStyles";
import { InputPlace } from "../InputPlace/InputPlace";
import styled from "@emotion/styled";
import Icons from "../UI/Icons";
import { InputNumber } from "../Inputs";

const InputWithIconStyles = styled.div`
  padding: 0;
  display: flex;

  .maintanance {
    padding: 2px 4px;
    border: none;
  }

  .montlyRent {
  }
`;

const PropertyTypeStyles = styled.div`
  display: flex;
`;

const CheckboxStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px 0 0;
  input {
    margin: 0 4px 8px 0;
  }
`;

const FormProperty = () => {
  return (
    <div>
      <Text type="Montserrat" size="H4" color="balck" textAlign="justify">
        Create a property listing
      </Text>
      <div>
        <Text
          type="Inter"
          size="Subtitle1"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          operation Type
        </Text>
        <div>
          <ButtonNavbarWelcome
            padding="8px 10px"
            margin="0"
            size="14px"
            family="Inter"
            letter="0.25px"
            nameButton="rent"
            backgroundH={colors.Pink}
            background={colors.White}
            colorH={colors.White}
            color={colors.Gray}
            borderColorH={colors.Gray}
            borderColor={colors.Gray}
            borderSizeH="1px"
            borderSize="1px"
            BTLR="8px"
            BTRR="0"
            BBLR="8px"
            BBRR="0"
            transform="capitalize"
            // onClick
          />
          <ButtonNavbarWelcome
            padding="8px 10px"
            margin="0"
            size="14px"
            family="Inter"
            letter="0.25px"
            nameButton="sale"
            backgroundH={colors.Pink}
            background={colors.White}
            colorH={colors.White}
            color={colors.Gray}
            borderColorH={colors.Gray}
            borderColor={colors.Gray}
            borderSizeH="1px"
            borderSize="1px"
            BTLR="0"
            BTRR="8px"
            BBLR="0"
            BBRR="8px"
            transform="capitalize"
            // onClick
          />
        </div>
      </div>
      <div>
        <Text
          type="Inter"
          size="Subtitle1"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          address
        </Text>

        <InputWithIconStyles>
          <Icons type="search" className="inputSearch" />
          <InputPlace />
        </InputWithIconStyles>
      </div>
      <div>
        <Text
          type="Inter"
          size="Subtitle1"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          montly rent
        </Text>
        <InputWithIconStyles>
          <Icons type="dollar" className="inputCoin" />
          <InputNumber
            type="text"
            // value={value}
            name="montly rent"
            placeholder="2000"
            maxLength="10"
            // onChange={onChange}
            className="montlyRent"
          />
        </InputWithIconStyles>
      </div>
      <div>
        <Text
          type="Inter"
          size="Subtitle1"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          maintanance
        </Text>
        <InputWithIconStyles>
          <Icons type="dollar" className="inputCoin" />
          <InputNumber
            type="text"
            // value={value}
            name="maintanance"
            placeholder="100"
            maxLength="10"
            // onChange={onChange}
            className="maintanance"
          />
        </InputWithIconStyles>
      </div>
      <div>
        <Text
          type="Inter"
          size="Subtitle1"
          color="Gray"
          letter="1.5px"
          transform="uppercase"
          textAlign="justify"
        >
          property type
        </Text>
        <PropertyTypeStyles>
          <CheckboxStyles>
            <input type="checkbox" />
            <Text
              type="Inter"
              size="BUTTON"
              color="Gray"
              letter="1.5px"
              transform="capitalize"
              textAlign="justify"
            >
              apartment
            </Text>
          </CheckboxStyles>

          <CheckboxStyles>
            <input type="checkbox" />
            <Text
              type="Inter"
              size="BUTTON"
              color="Gray"
              letter="0.25px"
              transform="capitalize"
              textAlign="justify"
            >
              house
            </Text>
          </CheckboxStyles>
        </PropertyTypeStyles>
      </div>
    </div>
  );
};

export default FormProperty;
