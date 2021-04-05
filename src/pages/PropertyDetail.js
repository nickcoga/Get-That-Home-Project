import styled from "@emotion/styled";
import React from "react";
import FooterLanding from "../components/Footers/FooterLanding";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import image from ".././assets/DefaultImage.svg";
import Icons from "../components/UI/Icons";
import { colors } from "../components/UI/ColorStyles";
import Maps from "../components/Maps/Maps";
import Text from "../components/UI/Heading";
import Button from "../components/UI/Button";

export default function PropertyDetail({ login, setLogin }) {
  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  return (
    <Container>
      <NavbarLanding />
      <Section>
        <div>
          <Photo>
            <Icons type="previous" />
            <img className="img" src={image} alt="Property" />
            <Icons type="next" />
          </Photo>
          <Info>
            <Firstinfo>
              <Address>Francisco de Paula Ugarriza 27 Miraflores, Lima</Address>
              <Price>
                <Icons type="price" /> 3,000
                <div className="plus">+100</div>
              </Price>
            </Firstinfo>

            <Line />
            <Details>
              <div>
                <Icons type="bed" /> 4 bedrooms
              </div>
              <div>
                <Icons type="bath" /> 2 bathrooms
              </div>
              <div>
                <Icons type="area" /> 180 m2
              </div>
              <div>
                <Icons type="pet" /> Pets allowed
              </div>
            </Details>
            <Line />
            <About>
              <Title>About this property</Title>
              <TextAbout>
                3 Bedroom/2 Bathroom apartment available for ASAP move-in!
                Apartment features hardwood floors throughout, virtual doorman,
                Central AC/heat, dishwasher and a microwave. The kitchen has
                custom cabinetry and the living room is big enough to fit a
                dinner table, a couch and a tv set up.
              </TextAbout>
            </About>
            <Location>
              <Title>Location</Title>
              <Maps />
            </Location>
          </Info>
        </div>

        <div>
          <SecondCard>
            <Text type="body1">Log in or Join to contact the advertiser</Text>
            <Button size="medium" onClick={(e) => handleClick(e)}>
              <Icons type="userplus" className="userplus" /> LOGIN
            </Button>
          </SecondCard>
        </div>
      </Section>

      <FooterLanding />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-contet: center;
  align-items: center;
`;

const Section = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 50px 152px;
  margin: 16px 0px;
  gap: 48px;
`;

const Photo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 830px;
  .img {
    width: 512px;
  }
`;

const Info = styled.div`
  width: 830px;
`;

const Firstinfo = styled.div`
  display: flex;
  gap: 90px;
  flex-direction: row;
`;

const Address = styled.div`
  width: 70%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.25px;
  padding: 20px 0px;
`;

const Price = styled.div`
  width: 20%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  padding: 20px 0px;
  .plus {
    margin-left: 60px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;

const Line = styled.hr`
  border-width: 0;
  height: 2px;
  background-color: ${colors.DarkPink};
  color: ${colors.DarkPink};
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  .font {
    border: 2px solid black;
  }
`;

const Title = styled.h6`
  color: ${colors.DarkPink};
  font-size: 20px;
  line-height: 28px;
  padding: 16px 0px;
`;

const TextAbout = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 0.5px;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const SecondCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 226px;
  height: 184px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
