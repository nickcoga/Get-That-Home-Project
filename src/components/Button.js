import styled from "@emotion/styled";
import { css } from "@emotion/react";

const paddings = {
  large: "16px 24px",
  medium: "8px 16px",
  small: "4px 8px",
};

function Button({ children, size = "medium", onClick }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
