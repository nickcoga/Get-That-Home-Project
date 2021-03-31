import styled from "@emotion/styled";
import { colors } from "../UI/ColorStyles";
import { useState } from "react";
import Icons from "../UI/Icons";

function SelectForm({ label = "Label" }) {
  const [value, setValue] = useState("");
  const items = ["any", 1, 2, 3, 4];

  const showModal = () => {
    const modalItems = document.querySelector(".modal-items");
    modalItems.style.display = "flex";
  };

  const sendData = (value) => {
    const modalItems = document.querySelector(".modal-items");
    const label = document.querySelector(".label-value");
    modalItems.style.display = "none";
    label.innerHTML = typeof value === "number" ? value : "Any";
    setValue(value);

    // para enviar los datos
    // console.log(value);
  };

  return (
    <StyledContainer>
      <span>{label}</span>
      <StyledInput>
        <span className="label-value">Select...</span>
        <Icons
          className="btn-down-modal"
          type="down"
          color={colors.DarkGray}
          onClick={showModal}
        />
      </StyledInput>
      <StyledSelects className="modal-items">
        {items.map((item, index) => (
          <label
            key={item + index}
            onClick={() => sendData(item)}
            className={value === item ? "active-label" : ""}
          >
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
  display: none;
  box-sizing: border-box;
  position: absolute;
  top: 48px;
  width: 100%;
  z-index: 3;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${colors.DarkGray};
  text-transform: capitalize;
  overflow: hidden;
  & > label {
    padding: 2px 8px;
  }

  .active-label {
    color: ${colors.White};
    background: ${colors.Pink};
  }
  & > label:hover {
    cursor: pointer;
    color: ${colors.White};
    background: ${colors.Pink};
  }
`;

export default SelectForm;
