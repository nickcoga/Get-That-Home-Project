import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/ColorStyles";

function ModalPropertyType({ disabled = false }) {

  return (
    <StyledContainer disabled={disabled}>
      <button id="btn-beds-and-baths" className="btn-modal">PROPERTY TYPE</button>
      <div className="container-main-beds_and_baths">
        <h2>Property Type</h2>
        <div className="container-nums">
          <label>
            <span>Houses</span>
            <input type="checkbox" name="houses" />
          </label>
          <label>
            <span>Apartments</span>
            <input type="checkbox" name="apartments" />
          </label>
        </div>
        <div className="container-button">
          <button className="btn-modal" >Done</button>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
 
`;

export default ModalPropertyType;