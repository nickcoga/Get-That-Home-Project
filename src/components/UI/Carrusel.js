import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";



const images = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/201/200",
  "https://picsum.photos/202/200",
  "https://picsum.photos/203/200",
  "https://picsum.photos/204/200",
];


function Carrusel({photos = images}) {
  const [photosList, setPhotosList] = useState(photos);
  const previousPhoto = () => {
    console.log("prev");
    setPhotosList([ photosList[photosList.length - 1], ...photosList.splice(0, photosList.length - 1),])
    //setPhotosList([photosList[0], ...photosList.splice(1)])
  }

  const nexPhoto = () => {
    console.log("next");
    setPhotosList([...photosList.splice(1), photosList[0]])
  }
  
  return (
    <StyledContainer>
      <StyledContainerIcon>
        <Icons className="prev" onClick={previousPhoto}  type="previous" />
      </StyledContainerIcon>
      {photosList.map((image, index) => (
        <img className={index === 1? 'active' : ''} key={index} src={image} alt={`Image ${index}`}/>
      ))}
      <StyledContainerIcon>
        <Icons className="next" onClick={nexPhoto} type="next" />
      </StyledContainerIcon>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: 930px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  align-content: center;
  margin: 0 auto;
  & > img {
    display: none;
    flex: 1;
    height: 384px;
  }
  .active {
    display: block;
  }

  & > svg {
    cursor: pointer;
  }

  img {
    transition: all 800ms ease-in;
  }
`;

const StyledContainerIcon = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  & > .prev,
  & > .next {
    transform: translateX(0px);
    transition: all 500ms ease-in-out;
    padding: 4px;
    border-radius: 50%;
  }

  & > .prev:hover {
    cursor: pointer;
    transform: translateX(-3px);
    background: ${colors.gray4};
    opacity: 0.2;
  }
  & > .next:hover {
    cursor: pointer;
    transform: translateX(3px);
    background: ${colors.gray4};
    opacity: 0.2;
  }
`;

export default Carrusel
