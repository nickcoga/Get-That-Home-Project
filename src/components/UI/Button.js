import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../styles/ColorStyles";

const paddings = {
  large: "16px 24px",
  medium: "8px 16px",
  small: "4px 8px",
};

const StyledButton = styled.button(
  (props) => css`
    padding: ${paddings[props.size]};
    box-sizing: border-box;
    width: 112px;
    text-align: center;
    border-radius: 16px;
    border: 1px solid ${colors.Pink};
    background-color: ${colors.Pink};
    color: ${colors.White};
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      background: ${colors.ShallowPink};
    }
  `
);

function Button({ children, size = "medium", onClick }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
