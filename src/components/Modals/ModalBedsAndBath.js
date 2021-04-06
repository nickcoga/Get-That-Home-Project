import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../UI/ColorStyles";

function ModalBedsAndBath({ disabled = false }) {
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const values = ["any", 1, 2, 3, 4];

  const handleChange = ({ target }) => {
    const { name, checked, value } = target;
    if (checked) {
      if (name === "beds") {
        setBeds(value);
        cleanSelected(name);
        target.parentElement.classList.add("active-check");
      }

      if (name === "baths") {
        setBaths(value);
        cleanSelected(name);
        target.parentElement.classList.add("active-check");
      }
    }
  };

  // remove style in previus item
  const cleanSelected = (name) => {
    const items = document.querySelectorAll(`.${name}`);
    items.forEach((element) => {
      element.classList.remove("active-check");
    });
  };

  const showModal = ({ target }) => {
    target.style.background = "#f55188";
    const container = document.querySelector(".container-main-beds_and_baths");
    container.style.display = "block";
  };

  // for update data en send
  const sendData = () => {
    const btnOpen = document.getElementById("btn-beds-and-baths");
    const container = document.querySelector(".container-main-beds_and_baths");
    btnOpen.style.background = colors.Pink;
    const nums = {
      beds,
      baths,
    };
    console.log(nums);
    container.style.display = "none";
  };
  return (
    <StyledContainer disabled={disabled}>
      <button id="btn-beds-and-baths" className="btn-modal" onClick={showModal}>
        BEDS & BATH
      </button>
      <div className="container-main-beds_and_baths">
        <div className="container-nums">
          <h2>Beds</h2>
          <div>
            {values.map((item, index) => (
              <label key={item + index} className="beds">
                <span>{item === "any" ? "Any" : `${item}+`}</span>
                <input
                  type="radio"
                  name="beds"
                  value={item}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="container-nums">
          <h2>Bath</h2>
          <div>
            {values.map((item, index) => (
              <label key={item + index} className="baths">
                <span>{item === "any" ? "Any" : `${item}+`}</span>
                <input
                  type="radio"
                  name="baths"
                  value={item}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="container-button">
          <button className="btn-modal" onClick={sendData}>
            Done
          </button>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;

  & > .container-main-beds_and_baths {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
    width: 270px;
    margin-top: 10px;
    position: absolute;
    background: ${colors.White};
    top: 40px;
    display: none;
    z-index: 4;
  }
  & > .container-main-beds_and_baths > .container-nums {
    font-family: sans-serif;

    h2 {
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${colors.gray4};
    }
    div {
      width: 250px;
      border: 1px solid ${colors.Gray};
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      border-radius: 8px;
      overflow: hidden;
    }
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
      height: 50px;
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
  & .btn-modal {
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
  & .btn-modal:focus {
    outline: none;
  }
  & .btn-modal:hover {
    cursor: pointer;
    background-color: ${({ disabled }) => !disabled && "#f55188"};
  }

  & .container-button {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
  }
  & .show-modal {
    display: block;
  }
`;

export default ModalBedsAndBath;
