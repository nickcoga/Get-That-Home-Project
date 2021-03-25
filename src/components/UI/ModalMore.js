import styled from "@emotion/styled"
import { useState } from "react";

function ModalMore() {
  const [pets, setPets] = useState(false);
  const [area, setArea] = useState({
    min: 0, 
    max: 0
  })

  return (
    <StyleContainer>
      <button id="btn-more" className="btn-modal" >
        More
      </button>
      <div className="container-more">
        <h2>More</h2>
        <div className="container-nums">
          <label>
            <input type="checkbox" name="pets" checked={pets} />
            <span className="checkmark"></span>
            <span>Pets Allowed</span>
          </label>
        </div>
        <div className="container-nums">
          <h2>AREA IN m2</h2>
          <div>
            <input type="number" name="area" value={area.min} />
            <span> - </span>
            <input type="number" name="area" value={area.max} />
          </div>
        </div>
        <div className="container-button">
          <button className="btn-modal">Done</button>
        </div>
      </div>
    </StyleContainer>
  )
}


const StyleContainer = styled.div`

`;
export default ModalMore
