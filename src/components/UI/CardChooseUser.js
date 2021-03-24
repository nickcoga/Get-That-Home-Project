import styled from '@emotion/styled';
import landlordImage from '../../assets/user-landlord.svg';
import homeSeekerImage from '../../assets/user-home-seeker.svg';

function CardChooseUser({type}) {
  
  const typeUsers ={
    landlord: {
      image: landlordImage,
      name: 'Landord',
      description: 'You want to rent or sell a home.'
    },
    homeSeeker: {
      image: homeSeekerImage,
      name: 'Home Seeker',
      description: 'You want to find a home.'
    }
  }
  const {image, name, description} = typeUsers[type];
  return (
    <StyledContainer>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>{description}</p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`

`;

export default CardChooseUser
