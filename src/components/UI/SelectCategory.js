import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function SelectCategory({categories}) {
  return (
    <StyledContainer>
      <StyledInput>
        <button>Select a category</button>
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

`;

const StyledInput = styled.div`

`;

const StyledSelects = styled.div`

`

export default SelectCategory
