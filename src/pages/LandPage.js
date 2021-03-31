import styled from "@emotion/styled";
import React from "react";
import LandPageImage from "../assets/illustration_1.png";
import Text from "../components/UI/Heading";
import "../components/CardProperty/CardProperty.css";
import NavbarWelcome from "../components/Navbars/NavbarWelcome";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import CardProperty from "../components/CardProperty/CardProperty";
import { colors } from "../components/UI/ColorStyles";
import ButtonNavbarWelcome from "../components/UI/ButtonNavbarWelcome";
import Partners from "../components/Partners/Partners";
import FooterLanding from "../components/Footers/FooterLanding";

const LandPageStyles = styled.div`
  width: 100%;

  .landPage {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;
    .secondHeader {
      position: absolute;
      &--styles {
        margin: 64px 0 0 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    img {
      width: 100%;
    }

    .box-cards {
      box-sizing: border-box;
      width: 100%;
      padding: 64px 222px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .box-cards--properties {
        width: 100%;
        display: flex;
        padding: 8px 0 0 0;
      }
    }

    .createAccount {
      width: 100%;
      padding: 64px 308px;
      box-sizing: border-box;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${colors.ShallowPink};
    }

    .team {
      width: 100%;
      margin: 64px 0;
      box-sizing: border-box;
    }

    .footer {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

const LandPage = () => {
  return (
    <LandPageStyles>
      <NavbarLanding />
      <div className="landPage">
        <div className="secondHeader">
          <div className="secondHeader--styles">
            <Text type="Montserrat" size="H2">
              Meet your new home
            </Text>
            <Text type="Montserrat" size="H5">
              The easiest way to find where you belong
            </Text>
            <NavbarWelcome />
          </div>
        </div>
        <img src={LandPageImage} alt="Buildings" />
        <div className="box-cards">
          <Text type="Montserrat" size="Subtitle2">
            Find an Apartment you Love
          </Text>
          <Text type="Montserrat" size="H4" color="DarkPink">
            Homes for rent at the best prices
          </Text>

          {/* ¡IMPORTANTE!: por el momento esto ira asi, despues le pondre el map */}
          <div className="box-cards--properties">
            <CardProperty />
            <CardProperty />
            <CardProperty />
          </div>
        </div>
        <div className="createAccount">
          <Text type="Montserrat" size="H4" color="DarkGray">
            Getting someone to rent your apartment has never been this easy
          </Text>
          <ButtonNavbarWelcome
            paddingTop="16px"
            paddingRight="24px"
            paddingBottom="16px"
            paddingLeft="24px"
            family="Inter"
            size="14px"
            letter="1.25px"
            nameButton="Create an account now"
            margin="32px 0 0 0"
          />
        </div>

        <div className="team">
          <Text type="Montserrat" size="H3" color="DarkPink">
            Meet the team
          </Text>
          <Partners />
        </div>
        <div className="footer">
          <FooterLanding />
        </div>
      </div>
    </LandPageStyles>
  );
};

export default LandPage;