import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/ColorStyles";

function ModalBedsAndBath({ disabled = false }) {
  const [ beds, setBeds ] = useState('');
  const [ baths, setBaths ] = useState('');
  const values = ['any', 1, 2, 3, 4];

  const handleChange = ({target}) => {
    const { name, checked, value } = target;
    if(checked){
      if(name === "baths") setBaths(value);
      if(name === "beds") setBeds(value);
    }
  }
  return (
    <StyledContainer disabled={disabled}>
      <button>BEDS & BATH</button>
      <div className="beds">
        <h2>Beds</h2>
        {values.map((item, index) =>(
          <label key={item + index}>
            <span>{item === 'any'? 'Any' : `${item}+`}</span>
            <input type="radio" name="beds" value={item} onChange={handleChange} />
          </label>
        ))}
      </div>
      <div className="baths">
        <h2>Bath</h2>
        {values.map((item, index) =>(
          <label key={item + index}>
            <span>{item === 'any'? 'Any' : `${item}+`}</span>
            <input type="radio" name="baths" value={item} onChange={handleChange} />
          </label>
        ))}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  & button {
    background-color: ${({ disabled }) =>
      disabled ? "#61616147" : colors.Pink};
    display: flex;
    align-items: center;
    gap: 3px;
    min-width: 105px;
    color: ${colors.White};
    padding: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    border: none;
    border-radius: 8px;
    transition: background 300ms ease-in-out;
  }
  & button:focus {
    outline: none;
  }
  & button:hover {
    cursor: pointer;
    background-color: ${({ disabled }) => !disabled && "#f55188"};
  }
`;

export default ModalBedsAndBath;
