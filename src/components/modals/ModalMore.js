import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/ColorStyles";
import { AiOutlineDown } from "react-icons/ai";

function ModalMore() {
  const [pets, setPets] = useState(true);
  const [area, setArea] = useState({
    min: 0,
    max: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "pets") {
      setPets(target.checked);
    }
    if (name === "min") {
      setArea({
        ...area,
        min: value,
      });
    }
    if (name === "max") {
      setArea({
        ...area,
        max: value,
      });
    }
  };

  const showModal = () => {
    const container = document.querySelector(".container-more");
    container.style.display = "block";
  };

  // for update data en send
  const sendDate = () => {
    const btnOpen = document.getElementById("btn-more");
    const container = document.querySelector(".container-more");
    btnOpen.style.background = colors.Pink;
    container.style.display = "none";
    const values = {
      pets,
      area,
    };
    console.log(values);
    // aqui enviamos los datos
    setPets(false);
    setArea({
      min: 0,
      max: 0,
    });
  };

  return (
    <StyleContainer>
      <button id="btn-more" className="btn-modal" onClick={showModal}>
        More
        <AiOutlineDown />
      </button>
      <div className="container-more">
        <h2>Pets</h2>
        <div className="container-pets">
          <label>
            <input
              className="pets-check"
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            <span>Pets Allowed</span>
          </label>
        </div>
        <div className="container-area">
          <h2>AREA IN m2</h2>
          <div>
            <input
              type="text"
              placeholder="min"
              name="min"
              value={area.min}
              onChange={handleChange}
            />
            <span> - </span>
            <input
              type="text"
              placeholder="max"
              name="max"
              value={area.max}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="container-button">
          <button className="btn-modal" onClick={sendDate}>
            Done
          </button>
        </div>
      </div>
    </StyleContainer>
  );
}

const StyleContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  & > .container-more {
    display: none;
    position: absolute;
    top: 45px;
    width: 250px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: ${colors.White};
    padding: 8px;
    .container-pets {
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
        border-color: #eee;
      }

      .pets-check {
        display: none;
      }

      .pets-check:checked ~ .checkmark {
        background: ${colors.Pink};
      }

      .pets-check:checked ~ .checkmark::after {
        display: block;
      }
    }

    .container-area {
      margin-bottom: 10px;
      div {
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      & input {
        border: 1px solid ${colors.Pink};
        width: 50px;
        padding: 8px;
        outline: none;
        border-radius: 8px;
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

    & > svg {
      background: transparent;
    }
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
export default ModalMore;
