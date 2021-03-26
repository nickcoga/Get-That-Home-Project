import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function SelectForm({ label = "Label" }) {
  const items = ["any", 1, 2, 3, 4];
  return (
    <StyledContainer>
      <span>{label}</span>
      <StyledInput>
        <span>Select...</span>
        <Icons className="btn-down-modal" type="down" color={colors.DarkGray} />
      </StyledInput>
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

const StyledContainer = styled.div`
  font-family: sans-serif;
  max-width: 120px;
  position: relative;
  & > span {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${colors.DarkGray};
    padding-bottom: 8px;
  }
`;

const StyledInput = styled.div`
  box-sizing: border-box;
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

  & > .btn-down-modal:hover {
    cursor: pointer;
  }

  &:hover {
    color: ${colors.DarkGray};
    background-color: #f5518810;
  }
`;

const StyledSelects = styled.div`
  box-sizing:border-box;
  position: absolute;
  top: 48px;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 4px 0px;
  margin-top: 12px;
  margin-bottom: 20px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${colors.DarkGray};
  text-transform: capitalize;
  & > label {
    padding: 2px 8px;
  }
  & > label:hover {
    cursor: pointer;
    color: ${colors.White};
    background: ${colors.Pink};
  }
`;

export default SelectForm;
