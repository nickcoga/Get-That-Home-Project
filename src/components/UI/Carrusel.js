import styled from "@emotion/styled";
import { colors } from "../styles/ColorStyles";
import Icons from "./Icons";



const images = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/201/200",
  "https://picsum.photos/202/200",
  "https://picsum.photos/201/200",
  "https://picsum.photos/202/200",
];

const nexPhoto = () => {

}

const previousPhoto = () => {

}
function Carrusel() {
  return (
    <StyledContainer>
      <StyledContainerIcon>
        <Icons className="prev" onClick={nexPhoto}  type="previous" />
      </StyledContainerIcon>
        {images.map((image, index) => (
          <img className={index === 1? 'active' : ''} key={index} src={image} alt={`Image ${index}`}/>
        ))}
      <StyledContainerIcon>
        <Icons className="next" onClick={previousPhoto} type="next" />
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
  & img {
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
`;

const StyledContainerIcon = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  & > .prev,
  & > .next {
    transform: translateX(0px);
    transition: transform 500ms ease-in-out;
    padding: 4px;
    border-radius: 50%;
  }

  & > .prev:hover {
    cursor: pointer;
    transform: translateX(-3px);
    background: ${colors.gray4};
    opacity: 0.5;
  }
  & > .next:hover {
    cursor: pointer;
    transform: translateX(3px);
    background: ${colors.gray4};
    opacity: 0.5;
  }
`;

export default Carrusel
