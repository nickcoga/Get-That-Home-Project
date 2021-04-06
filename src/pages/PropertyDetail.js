import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import FooterLanding from "../components/Footers/FooterLanding";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import image from ".././assets/DefaultImage.svg";
import Icons from "../components/UI/Icons";
import { colors } from "../components/UI/ColorStyles";
import Maps from "../components/Maps/Maps";
import Text from "../components/UI/Heading";
import Button from "../components/UI/Button";
import MapsPoint from "../components/Maps/MapsPoint";
import { useParams } from "react-router-dom";

import { BASE_URI } from "../app/Config";
import Carrusel from "../components/Carrusel";

export default function PropertyDetail({ login, setLogin }) {
  const params = useParams();
  const [property, setProperty] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  React.useEffect(() => {
    // console.log("useEffect");
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${BASE_URI}/properties/${params.id}`);
    const data = await response.json();
    console.log(data);
    setProperty(data);
  };
  let area,
    address,
    pets,
    bedrooms,
    bathrooms,
    lng,
    lat,
    name,
    operation_type,
    phone,
    price,
    property_type,
    photos;

  if (property) {
    area = property.property.area;
    address = property.property.address;
    pets = property.property.pets;
    bedrooms = property.property.address;
    bathrooms = property.property.bathrooms;
    lng = property.property.lng;
    lat = property.property.lat;
    name = property.property.address;
    operation_type = property.property.operation_type;
    phone = property.property.phone;
    price = property.property.price;
    property_type = property.property.operatiproperty_typeon_type;
    photos = property.photos.map((item) => item.url);
  }

  return (
    <Container>
      <NavbarLanding />
      {!property ? (
        <h1>Loading ...</h1>
      ) : (
        <Section>
          <div>
            <Photo>
              <Carrusel photos={photos}></Carrusel>
              {/*<Icons type="previous" />
            <img className="img" src={image} alt="Property" />
      <Icons type="next" />*/}
            </Photo>
            <Info>
              <Firstinfo>
                <Address>{address}</Address>
                <Price>
                  <Icons type="price" />
                  {price}
                  <div className="plus">+100</div>
                </Price>
              </Firstinfo>

              <Line />
              <Details>
                <div>
                  <Icons type="bed" /> {bedrooms} bedrooms
                </div>
                <div>
                  <Icons type="bath" /> {bathrooms} bathrooms
                </div>
                <div>
                  <Icons type="area" /> {area} m2
                </div>
                <div>{pets && <Icons type="pet" />}</div>
              </Details>
              <Line />
              <About>
                <Title>{name}</Title>
                <TextAbout>
                  {bedrooms} Bedroom/{bathrooms} Bathroom apartment available
                  for ASAP move-in! Apartment features hardwood floors
                  throughout, virtual doorman, Central AC/heat, dishwasher and a
                  microwave. The kitchen has custom cabinetry and the living
                  room is big enough to fit a dinner table, a couch and a tv set
                  up.
                </TextAbout>
              </About>
              <Location>
                <Title>Location</Title>
                <LocationAddress>{address}</LocationAddress>
                <MapsPoint lat={lat} lng={lng} />
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
      )}
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
  width: 65%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.25px;
  padding: 20px 0px;
`;

const Price = styled.div`
  width: 25%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  padding: 20px 0px;
  .plus {
    margin-left: 100px;
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

const LocationAddress = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding: 10px 0px;
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
