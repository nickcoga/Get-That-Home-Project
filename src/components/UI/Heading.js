import styled from "@emotion/styled";
import { colors } from "../UI/ColorStyles";

export default function Text({ 
  type, 
  size, 
  color, 
  caption, 
  children, 
  letter, 
  transform,
  textAlign,
}) {
  return (
    <StyledText 
      type={type} 
      size={size} 
      color={color} 
      caption={caption} 
      letter={letter} 
      transform={transform}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
}

function calcSize(size) {
  let sizeF = 14;
  let height = 17;
  switch (size) {
    case "H1":
      sizeF = 96;
      height = 128;
      break;

    case "H2":
      sizeF = 64;
      height = 88;
      break;

    case "H3":
      sizeF = 48;
      height = 64;
      break;

    case "H4":
      sizeF = 36;
      height = 48;
      break;

    case "H5":
      sizeF = 24;
      height = 32;
      break;

    case "H6":
      sizeF = 20;
      height = 28;
      break;

    case "Subtitle1":
      sizeF = 16;
      height = 24;
      break;

    case "Subtitle2":
      sizeF = 14;
      height = 20;
      break;

    case "Body1":
      sizeF = 16;
      height = 24;
      break;
    case "Body2":
      sizeF = 14;
      height = 20;
      break;

    case "BUTTON":
      sizeF = 14;
      height = 24;
      break;

    case "Caption":
      sizeF = 12;
      height = 16;
      break;

    case "Overline":
      sizeF = 10;
      height = 16;
      break;

    default:
      sizeF = 16;
      height = 17;
      break;
  }
  return `
    font-size: ${sizeF}px;
    line-height: ${height}px;
  `;
}

const StyledText = styled.p`
  font-family: ${(props) => (props.caption ? "Lato" : "Montserrat")};
  font-weight: ${(props) => (props.type === "SemiBold" ? 500 : "normal")};
  ${(props) => calcSize(props.size)}
  color: ${(props) => colors[props.color]};
  margin: 0 0 8px 0;
  text-align: ${(props) => (props.textAlign ? "jutify" : "center")};
  letter-spacing: ${(props) => props.letter};
  text-transform: ${(props) => props.transform};
`;
