import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "./UI/ColorStyles";

function ToggleOperation() {
  const [operation, setOperation] = useState("");
  const handleChange = ({ target }) => {
    const { value, checked } = target;
    const tags = document.querySelectorAll(".operation-checks");
    tags.forEach((tag) => tag.parentElement.classList.remove("active-check"));

    if (checked) {
      setOperation(value);
      target.parentElement.classList.add("active-check");
    }
    // Enviar los datos
    console.log(value);
  };

  return (
    <StyledContainer>
      <h2>Operation type</h2>
      <div className="operations">
        <label>
          <input
            className="operation-checks"
            type="radio"
            name="operation"
            value="rent"
            onChange={handleChange}
          />
          <span>Rent</span>
        </label>
        <label>
          <input
            className="operation-checks"
            type="radio"
            name="operation"
            value="sale"
            onChange={handleChange}
          />
          <span>Sale</span>
        </label>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  font-family: sans-serif;
  & > h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    color: ${colors.DarkGray};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 4px;
    color: ${colors.Gray};
  }
  & > .operations {
    width: 100px;
    border: 1px solid ${colors.Gray};
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    border-radius: 8px;
    overflow: hidden;
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: ${colors.Gray};
      width: 50px;
      height: 35px;
      border-right: 1px solid ${colors.Gray};
      transition: all 250ms ease-in-out;
    }

    label:last-child {
      border-right: none;
    }

    label:hover {
      color: ${colors.White};
      cursor: pointer;
      background: ${colors.Pink};
    }

    .active-check {
      color: ${colors.White};
      cursor: pointer;
      background: ${colors.Pink};
    }

    label > input {
      display: none;
    }
  }
`;

export default ToggleOperation;
