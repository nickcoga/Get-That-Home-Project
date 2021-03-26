import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";

function ToggleOperation() {
  return (
    <StyledContainer>
      <h2>Operation type</h2>
      <label>
        <span>Rent</span>
        <input type="radio" name="operation" value="rent" />
      </label>
      <label>
        <span>Sale</span>
        <input type="radio" name="operation" value="sale" />
      </label>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: sans-serif;
  & > h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    color: ${colors.DarkGray};
  }
  
`;

export default ToggleOperation;
