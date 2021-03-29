import styled from "@emotion/styled";
import Icons from "./Icons";

const numbers = [1, 2, 3, 4, 5, 6, 7];
function Pagination({pages = numbers}) {
  
  return (
    <StyledContainer>
      <Icons type="previous" />
      <StyleContainerNumbers>
        {numbers.map((number, index) =>  (
          <span key={index}>{number}</span>
        ))}
      </StyleContainerNumbers>
      <Icons type="next" />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`;

const StyleContainerNumbers = styled.div`

`;

export default Pagination
