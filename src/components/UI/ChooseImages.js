import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function ChooseImages({ onChange, name='image', label='image' }) {
  const handleClick = () => {
    console.log("click");
    let chooseInput = document.getElementById("choose-file-input");
    chooseInput.click();
    chooseInput.style.color = colors.DarkGray;
  };

  // const handleChange = ({target}) => {
  //   const { name, value } = target;
  //   console.log(name, value);
  // }
  
  return (
    <StyledContainer>
      <label htmlFor="file">{label}</label>
      <div>
        <button name="file" onClick={handleClick} >
          <Icons type="choosefile" color="white" />
          <span>Choose file</span>
        </button>
        <input
          id="choose-file-input"
          name={name}
          type="file"
          onChange={onChange}
          accept="j"
        />
      </div>
      <p>Only images, max 5MB</p>
      <StyleContainerPhotos>
        <div className="no-photos">
          <p>No photos yet.</p>
        </div>
        <div className="photo-container">

        </div>
      </StyleContainerPhotos>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 5px;
  #choose-file-input::-webkit-file-upload-button {
    display: none;
  }

  & > label {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    color: ${colors.DarkGray}
  }
  & > div {
    display: flex;
    align-items: center;
  }

  &  input {
    color: #616161;
    margin-left: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }

  &  button {
    background-color: ${({ disabled }) =>
      disabled ? '#61616147' : colors.Pink};
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

  &  button:focus {
    outline: none;
  }

  &  button:hover {
    cursor: pointer;
    background-color: ${({ disabled }) => !disabled && "#f55188"};
  }

  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.LightGray};
    margin: 0;
  }
`;

const StyleContainerPhotos = styled.div`
  height: 140px;
  background: #F5F5F6;
  & > .no-photos {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    display: flex;
    background: ${colors.BackgroundLight};
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.DarkGray};
  }
`;

export default ChooseImages;
