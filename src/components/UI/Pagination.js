import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
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
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyleContainerNumbers = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  font-family: sans-serif;
  width: 180px;
  overflow: hidden;
  & > span {
    box-sizing: border-box;
    width: 32px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.Gray};
    padding: 5px 12px;
    border: 1px solid rgba(97, 97, 97, 0.15);
    border-radius: 4px;
    transition: all 300ms ease-in;
  }

  & > span:hover {
    cursor: pointer;
    background: rgba(244, 143, 177, 0.15);
    border: 1px solid ${colors.DarkPink};
  }

  .active {
    cursor: pointer;
    background: rgba(244, 143, 177, 0.15);
    border: 1px solid ${colors.DarkPink};
  }
`;

export default Pagination
