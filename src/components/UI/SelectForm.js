import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function SelectForm({ label = "Label" }) {
  const items = ["any", 1, 2, 3, 4];
  return (
    <StyledContainer>
      <span>{label}</span>
      <StyledButton>
        <span>Select...</span>
        <Icons type="down" color={colors.DarkGray} />
      </StyledButton>
      <StyledSelects className="modal-categories">
        {items.map((item, index) => (
          <label key={item + index}>
            <span>{item}</span>
          </label>
        ))}
      </StyledSelects>
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

const StyledSelects = styled.div``;

const StyledButton = styled.div``;
export default SelectForm;
