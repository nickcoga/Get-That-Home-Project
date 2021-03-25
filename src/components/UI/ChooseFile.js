import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function ChooseFile({ disabled = false, onChange, name='image', label='image' }) {
  const handleClick = () => {
    let chooseInput = document.getElementById("choose-file-input");
    chooseInput.click();
    chooseInput.style.color = colors.DarkGray;
  };

  // const handleChange = ({target}) => {
  //   const { name, value } = target;
  //   console.log(name, value);
  // }

  return (
    <StyledContainer
      onClick={!disabled ? handleClick : () => {}}
      disabled={disabled}
    >
      <label for="file">{label}</label>
      <div>
        <button name="file">
          <Icons type="choosefile" color="white" onClick={handleClick} />
          <span>Choose file</span>
        </button>
        <input
          id="choose-file-input"
          name={name}
          type="file"
          onChange={onChange}
        />
      
      </div>
      
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap");
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
`;

export default ChooseFile;
