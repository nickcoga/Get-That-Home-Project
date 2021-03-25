import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/ColorStyles";

function ModalPropertyType({ disabled = false }) {
  return (
    <StyledContainer disabled={disabled}>
      <button id="btn-beds-and-baths" className="btn-modal">
        PROPERTY TYPE
      </button>
      <div className="container-main">
        <h2>Property Type</h2>
        <div className="container-nums">
          <label>
            <input type="checkbox" name="houses" />
            <span class="checkmark"></span>
            <span>Houses</span>
          </label>
          <label>
            <input type="checkbox" name="apartments" />
            <span class="checkmark"></span>
            <span>Apartments</span>
          </label>
        </div>
        <div className="container-button">
          <button className="btn-modal">Done</button>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  & > .container-main {
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
        gap: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
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
