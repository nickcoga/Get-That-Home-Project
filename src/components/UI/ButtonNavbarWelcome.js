import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colors } from "./ColorStyles";
import "../CardComponentProperty/CardComponentProperty.css";

const ButtonNavbarWelcomeStyles = styled.button(
  ({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    size,
    family,
    letter,
    margin,
  }) => css`
    padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
    margin: ${margin};
    box-sizing: border-box;
    text-align: center;
    border-radius: 16px;
    border: none;
    background: ${colors.Pink};
    color: ${colors.White};
    font-size: ${size};
    line-height: 24px;
    cursor: pointer;
    font-family: ${family};
    letter-spacing: ${letter};
    outline: none;

    &:hover {
      background: ${colors.White};
      color: ${colors.Pink};
      border: ${colors.Pink} solid 1px;
      letter-spacing: ${letter};
    }
  `
);

const ButtonNavbarWelcome = ({
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  nameButton,
  size,
  family,
  onClick,
  letter,
  margin,
}) => {
  return (
    <ButtonNavbarWelcomeStyles
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      onClick={onClick}
      size={size}
      family={family}
      letter={letter}
      margin={margin}
    >
      {nameButton}
    </ButtonNavbarWelcomeStyles>
  );
};

export default ButtonNavbarWelcome;
