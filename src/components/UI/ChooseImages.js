import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";

function ChooseImages({ onChange, name='image', label='image' }) {
  const [photos, setPhotos] = useState([]);
  const [photos64, setPhotos64] =  useState([]);
  const handleClick = () => {
    console.log("click");
    let chooseInput = document.getElementById("choose-file-input");
    chooseInput.click();
    chooseInput.style.color = colors.DarkGray;
  };

  const sendData = (e) => {
    const { value }= e.target;
    let image64 = '';
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      image64 = reader.result;
      setPhotos64(prev => {
        if(!prev.includes(image64)) {
          return [image64, ...prev]
        } 
        return prev;
      })
    }
    reader.readAsDataURL(file);

    setPhotos(prev => {
      if(prev.includes(value)) {
        return prev.filter(photo => photo !== value);
      } else {
        return [value, ...prev]
      }
    })

    // para enviar data
    console.log(photos);
  }

  const removePhoto = (photo) => {
    setPhotos64(photos64.filter(item => item !== photo))
  }
  
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
          onChange={sendData}
          multiple
          accept="image/*"
        />
      </div>
      <p>Only images, max 5MB</p>
      <StyleContainerPhotos>
        {photos64.length > 0 ?
          <div className="photos-container">
            {photos64.map((photo, index )=> (
              <div key={index} className="photo-container">
                <div className="button-close">
                  <Icons onClick={() => removePhoto(photo)} type="close" color={colors.DarkGray} />
                </div>
                <img className="photo-property" src={photo} alt={"Photo" + index}/>
              </div>
            ))}
          </div>:
          <div className="no-photos">
            <p>No photos yet.</p>
          </div>
        }
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
  background: #F5F5F6;
  padding: 8px;
  box-sizing: border-box;
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

  .photos-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .photo-container {
    box-sizing: border-box;
    width: 140px;
    height: 160px;
    padding: 2px 0px;
    border-radius: 8px;
    display: flex;
    background: ${colors.BackgroundLight};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.DarkGray};
    overflow: hidden;
  }

  .button-close {
    box-sizing: border-box;
    width: 100%;
    padding: 2px 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    color: ${colors.Gray};
    & > svg:hover {
      cursor: pointer;
      color: #000; 
    }
  }
  .photo-property {
    width: 100%;
    height: 80%;
  }

`;

export default ChooseImages;
