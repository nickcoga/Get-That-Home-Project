import styled from "@emotion/styled";
import React from "react";
import LandPageImage from "../assets/illustration_1.png";
import Text from "../components/UI/Heading";
import "../components/CardProperty/CardProperty.css";
import NavbarWelcome from "../components/Navbars/NavbarWelcome";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import CardProperty from "../components/CardProperty/CardProperty";
import { colors } from "../components/UI/ColorStyles";
import { ButtonNavbarWelcome } from "../components/UI/ButtonNavbarWelcome";
import Partners from "../components/Partners/Partners";
import FooterLanding from "../components/Footers/FooterLanding";
import { useState } from "react";
import LoginForm from "../components/Features/Session/LoginForm";
import { Link } from "react-router-dom";

const LandPageStyles = styled.div`
  width: 100%;

  .navbar-landing {
    width: 100%;
    box-sizing: border-box;
  }

  .landPage {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;
    padding: 0;
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

    .image-absolute {
      width: 100%;
    }

    .image-background {
      display: none;
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

    .link {
      color: ${colors.Gray};
      text-decoration: none;
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
  const [login, setLogin] = useState(false);

  return (
    <LandPageStyles>
      <div className="navbar-landing">
        <NavbarLanding login={login} setLogin={setLogin} />
      </div>
      {login && (
        <div className="login-form">
          <div className="login-form--position">
            <LoginForm />
          </div>
        </div>
      )}
      <div className="landPage">
        <div className={login ? "secondHeader--login" : "secondHeader"}>
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
        <img
          src={LandPageImage}
          alt="Buildings"
          className={login ? "image-background" : "image-absolute"}
        />
        <div className="box-cards">
          <Text type="Montserrat" size="Subtitle2">
            Find an Apartment you Love
          </Text>
          <Text type="Montserrat" size="H4" color="DarkPink">
            Homes for rent at the best prices
          </Text>

          <div className="box-cards--properties">
            <CardProperty />
          </div>
        </div>
        <div className="createAccount">
          <Text type="Montserrat" size="H4" color="DarkGray">
            Getting someone to rent your apartment has never been this easy
          </Text>
          <Link to="/signup" className="link">
            <ButtonNavbarWelcome
              padding="16px 24px"
              margin="32px 0 0 0"
              size="14px"
              family="Inter"
              letter="1.25px"
              nameButton="Create an account now"
              backgroundH={colors.White}
              background={colors.Pink}
              colorH={colors.Pink}
              color={colors.White}
              borderColorH={colors.Pink}
              borderColor={colors.Pink}
              borderRadius="16px"
              borderSizeH="1px"
              borderSize="1px"
            />
          </Link>
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
