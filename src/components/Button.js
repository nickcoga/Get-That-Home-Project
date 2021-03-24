import styled from "@emotion/styled";
import { css } from "@emotion/react";

const paddings = {
  large: "16px 24px",
  medium: "8px 16px",
  small: "4px 8px",
};

const StyledButton = styled.button(
  (props) => css`
    padding: ${paddings[props.size]};
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid #f48fb1;
    background-color: #ffffff;
    color: #616161;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      background: gba(244, 143, 177, 0.15);
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
