import styled from "@emotion/styled";
import landlordImage from "../../assets/user-landlord.svg";
import homeSeekerImage from "../../assets/user-home-seeker.svg";

function Payment({ type, setType, nextStep }) {
  const typeUsers = {
    landlord: {
      image: landlordImage,
      name: "Landord",
      description: "You want to rent or sell a home.",
    },
    homeseeker: {
      image: homeSeekerImage,
      name: "Home Seeker",
      description: "You want to find a home.",
    },
  };
  const { image, name, description } = typeUsers[type];
  const handleClick = () => {
    setType(type);
    nextStep(prev => prev + 1);
  }
  return (
    <StyledContainer onClick={handleClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0;
  box-sizing: border-box;
  max-width: 300px;
  width: 280px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
  padding: 16px 0px;
  font-family: "Montserrat", sans-serif;
  color: #373737;
  height: 274px;
  background: #fff;
  &:hover {
    cursor: pointer;
  }
  & > h2 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 6px;
  }

  & > p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

export default Payment;
