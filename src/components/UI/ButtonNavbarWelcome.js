import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colors } from "../UI/ColorStyles";
import "../../components/CardProperty/CardProperty";

const ButtonNavbarWelcomeStyles = styled.button(
  ({
    padding,
    size,
    family,
    letter,
    margin,
    backgroundH=colors.White,
    background=colors.Pink,
    colorH=colors.Pink,
    color=colors.White,
    borderColorH=colors.Pink,
    borderRadius,
    BTLR,
    BTRR,
    BBLR,
    BBRR,
    paddingH=padding,
    borderSize="1px"
  }) => css`
    padding: ${padding};
    margin: ${margin};
    box-sizing: border-box;
    text-align: center;
    border-radius: ${borderRadius};
    border: none;
    background: ${background};
    color: ${color};
    font-size: ${size};
    line-height: 24px;
    cursor: pointer;
    font-family: ${family};
    letter-spacing: ${letter};
    outline: none;
    
    border-top-left-radius: ${BTLR};
    border-top-right-radius: ${BTRR};
    border-bottom-left-radius: ${BBLR};
    border-bottom-right-radius: ${BBRR};

    &:hover {
      padding: ${paddingH};
      background: ${backgroundH};
      color: ${colorH};
      border: ${borderColorH} solid ${borderSize};
      letter-spacing: ${letter};
    }
  `
);

const ButtonNavbarWelcome = ({
  padding,
  nameButton,
  size,
  family,
  onClick,
  letter,
  margin,
  backgroundH,
  background,
  colorH,
  color,
  borderColorH,
  borderRadius,
  BTLR,
  BTRR,
  BBLR,
  BBRR,
  paddingH,
  borderSize
}) => {
  return (
    <ButtonNavbarWelcomeStyles
      padding={padding}
      paddingH={paddingH}
      onClick={onClick}
      size={size}
      family={family}
      letter={letter}
      margin={margin}
      backgroundH={backgroundH}
      backgroundH={background}
      colorH={colorH}
      colorH={color}
      borderColorH={borderColorH}
      borderRadius={borderRadius}
      BTLR={BTLR}
      BTRR={BTRR}
      BBLR={BBLR}
      BBRR={BBRR}
      borderSize={borderSize}
    >
      {nameButton}
    </ButtonNavbarWelcomeStyles>
  );
};

export default ButtonNavbarWelcome;
