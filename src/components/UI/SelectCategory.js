import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function SelectCategory({categories}) {
  return (
    <StyledContainer>
      <StyledInput>
        <span>Select a category</span>
        <Icons type="down" color={colors.DarkGray} />
      </StyledInput>
      <StyledSelects>
        {categories.map(category => (
          <label key={category}>
            <input type="checkbox" name="houses"/>
            <span className="checkmark"></span>
            <span>{category}</span>
          </label>
        ))}
      </StyledSelects>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  font-family: sans-serif;
`;

const StyledInput = styled.div`
  box-sizing: border-box;
  width: 250px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid ${colors.Pink};
  border-radius: 8px;
  color: ${colors.Gray};
  &:hover {
    cursor: pointer;
    color: ${colors.DarkGray};
    background-color: #F5518810;
  }
  span {
    font-size: 14px;
    flex: 1;
    border: none;
  }
  
`;

const StyledSelects = styled.div`

`

export default SelectCategory
