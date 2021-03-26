import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function SelectCategory({ categories }) {
  return (
    <StyledContainer>
      <span>Category</span>
      <StyledInput>
        <StyledTags>
          <span>Select a category</span>
          <div className="multiple-tags">
            <span>
              Education
              <Icons type="close" color={colors.DarkGray}/>
            </span>
            <span>
              Education
              <Icons type="close" color={colors.DarkGray}/>
            </span>

            <span>
              Education
              <Icons type="close" color={colors.DarkGray}/>
            </span>
            <span>
              Education
              <Icons type="close" color={colors.DarkGray}/>
            </span>
          </div>
        </StyledTags>
        <Icons type="down" color={colors.DarkGray} />
      </StyledInput>
      <StyledSelects>
        {categories.map((category) => (
          <label key={category}>
            <input type="checkbox" name="houses" />
            <span className="checkmark"></span>
            <span>{category}</span>
          </label>
        ))}
        <div className="button-modal">
          <button >Done</button>
        </div>
      </StyledSelects>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: sans-serif;
  width: 250px;
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
  
  & > div {
    flex:1;
  }

  &:hover {
    cursor: pointer;
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
  gap: 8px;
  padding: 16px 8px;
  margin-top: 12px;
  margin-bottom: 20px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  .checkmark {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${colors.Pink};
    transition: all 300ms ease;
  }

  .checkmark:after {
    position: absolute;
    content: "";
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    display: none;
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
    color: ${colors.Gray};
  }

  label:hover {
    cursor: pointer;
  }

  label:hover .checkmark {
    border-color: #eee;
  }

  input {
    display: none;
  }

  input:checked ~ .checkmark {
    background: ${colors.Pink};
  }

  input:checked ~ .checkmark::after {
    display: block;
  }

  & > .button-modal{
    display: flex;
    justify-content: flex-end;
    button {
      background-color: ${({ disabled }) =>
        disabled ? "#61616147" : colors.Pink};
      display: flex;
      align-items: center;
      gap: 3px;
      color: ${colors.White};
      padding: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      border: none;
      border-radius: 8px;
      transition: background 300ms ease-in-out;
      text-transform: uppercase;
    }
    button:focus {
      outline: none;
    }

    button:hover {
      cursor: pointer;
      background-color: ${({ disabled }) => !disabled && "#f55188"};
    }
  }
`;

const StyledTags = styled.div`
  & > span:first-child {
    font-size: 14px;
    border: none;
    width: 100%;
    display: block;
    margin-bottom: 8px;
  }
  & > .multiple-tags {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
  }

  & > .multiple-tags {
    span {
      display: flex;
      width: 40%;
      justify-content: space-between;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      padding: 4px 8px;
      background: rgba(244, 143, 177, 0.15);
      border-radius: 8px;
    }
  }


`;
export default SelectCategory;
