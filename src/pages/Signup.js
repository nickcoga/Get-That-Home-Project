import { useState, useEffect } from 'react';

import styled from "@emotion/styled";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import FooterLanding from "../components/Footers/FooterLanding";
import Payment from "../components/Payment/Payment";
import UsersForm from "../components/Features/Users/UsersForm";
import { colors } from '../components/UI/ColorStyles';

function Signup() {
  const [step, setStep] = useState(1);
  const [typeUser, setTypeUser] = useState('');

  return (
    <StyledContainer>
      <StyledHeader>
        <NavbarLanding />
      </StyledHeader>
      <StyledBody>
        { step === 1
          ? 
          <StyledContainerPayment>
            <Payment setType={setTypeUser} nextStep={setStep} type="landlord" />
            <Payment setType={setTypeUser} nextStep={setStep} type="homeSeeker" />
          </StyledContainerPayment>
          :
          <StyledContainerForm>
            <UsersForm id={1}/>
          </StyledContainerForm> 
        }
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
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, ${colors.ShallowPink} 50%, white  50%);
`;

const StyledContainerPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  height: 100%;
`;

const StyledContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  height: 100%;
  width: 460px;
`;

const StyledFooter = styled.div`

`;




export default Signup
