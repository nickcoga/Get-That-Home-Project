import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/ColorStyles";

function ModalPropertyType({ disabled = false }) {
  const [ houses, setHouses ] = useState(false);
  const [ apartments, setApartments] = useState(false);;

  const handleChange = ({target}) => {
    const { name, checked } = target;
    if(name === "houses") {
      setHouses(checked)
    } 
    if(name === "apartments") {
      setApartments(checked)
    }
  }

  const showModal = ({target}) => {
    target.style.background = "#f55188";
    const container = document.querySelector(".container-property-types");
    container.style.display="block";
  }

  // for update data en send
  const sendDate = () => {
    const btnOpen = document.getElementById("btn-property-types");
    const container = document.querySelector(".container-property-types");
    btnOpen.style.background = colors.Pink;
    container.style.display="none";
    const nums = {
      houses,
      apartments
    }
    // aqui enviamos los datos
    console.log(nums);
    setHouses(false);
    setApartments(false);
  }
  return (
    <StyledContainer disabled={disabled}>
      <button id="btn-property-types" className="btn-modal" onClick={showModal}>
        PROPERTY TYPE
      </button>
      <div className="container-property-types">
        <h2>Property Type</h2>
        <div className="container-nums">
          <label>
            <input type="checkbox" name="houses" checked={houses} onChange={handleChange} />
            <span className="checkmark"></span>
            <span>Houses</span>
          </label>
          <label>
            <input type="checkbox" name="apartments" checked={apartments} onChange={handleChange}/>
            <span className="checkmark"></span>
            <span>Apartments</span>
          </label>
        </div>
        <div className="container-button">
          <button className="btn-modal" onClick={sendDate}>Done</button>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  & > .container-property-types {
    display: none;
    position: absolute;
    top: 40px;
    width: 250px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: ${colors.White};
    padding: 8px;
    .container-nums {
      display: flex;
      justify-content: space-around;
      margin-top: 12px;
      margin-bottom: 20px;
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
        transform: rotate(45deg);
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
        border-color:  #eee;
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
    }

    h2 {
      font-family: sans-serif;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${colors.gray4};
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
`;

export default ModalPropertyType;
