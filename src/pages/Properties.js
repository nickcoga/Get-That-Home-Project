import styled from "@emotion/styled";

import NavbarLanding from "../components/Navbars/NavbarLanding";

import FooterLanding from "../components/Footers/FooterLanding";

function Properties() {
  return (
    <StyledContainer>
      <StyledHeader>
        <NavbarLanding />
      </StyledHeader>
      <StyledBody>
        Body
      </StyledBody>
      <StyledFooter>
        <FooterLanding /> 
      </StyledFooter>
    </StyledContainer>
  )
}


const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const StyledHeader = styled.div`

`;


const StyledBody = styled.div`
  flex: 1;
`;

const StyledFooter = styled.div`

`;

export default Properties
