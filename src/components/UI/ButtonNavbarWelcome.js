import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { colors } from "../UI/ColorStyles";
import "../../components/CardProperty/CardProperty";

const ButtonNavbarWelcomeStyles = styled.button(
  ({
    padding,
    margin,
    size,
    family,
    letter,
    backgroundH,
    background,
    colorH,
    color,
    borderColorH,
    borderColor,
    borderSizeH,
    borderSize,
    borderRadius,
    BTLR,
    BTRR,
    BBLR,
    BBRR,
    transform,
  }) => css`
    padding: ${padding};
    margin: ${margin};
    box-sizing: border-box;
    text-align: center;
    border-radius: ${borderRadius};
    border: ${borderColor} solid ${borderSize};
    background: ${background};
    color: ${color};
    font-size: ${size};
    line-height: 24px;
    cursor: pointer;
    font-family: ${family};
    letter-spacing: ${letter};
    outline: none;
    text-transform: ${transform};
    
    border-top-left-radius: ${BTLR};
    border-top-right-radius: ${BTRR};
    border-bottom-left-radius: ${BBLR};
    border-bottom-right-radius: ${BBRR};

    &:hover {
      background: ${backgroundH};
      color: ${colorH};
      border: ${borderColorH} solid ${borderSizeH};
      letter-spacing: ${letter};
    }
  `
);

const ButtonNavbarWelcome = ({
  padding,
  nameButton,
  size,
  family,
  letter,
  margin,
  backgroundH,
  background,
  colorH,
  color,
  borderColorH,
  borderColor,
  borderSizeH,
  borderSize,
  borderRadius,
  BTLR,
  BTRR,
  BBLR,
  BBRR,
  transform,
  onClick,
  className,
}) => {
  return (
    <ButtonNavbarWelcomeStyles
      padding={padding}
      margin={margin}
      size={size}
      family={family}
      letter={letter}
      backgroundH={backgroundH}
      background={background}
      colorH={colorH}
      color={color}
      borderColorH={borderColorH}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderSizeH={borderSizeH}
      borderSize={borderSize}
      BTLR={BTLR}
      BTRR={BTRR}
      BBLR={BBLR}
      BBRR={BBRR}
      transform={transform}
      onClick={onClick}
      className={className}
      >
      {nameButton}
    </ButtonNavbarWelcomeStyles>
  );
};

export default ButtonNavbarWelcome;
