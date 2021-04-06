import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/DefaultImage.svg";
import { colors } from "../components/UI/ColorStyles";
import Icons from "../components/UI/Icons";
// import "../components/CardProperty/CardProperty";
import { BASE_URI } from "../app/Config";
import SearchLocationInput from "../components/InputPlace/InputPlacesAutocomplete";
import NavbarLanding from "../components/Navbars/NavbarLanding";
import FooterLanding from "../components/Footers/FooterLanding";
import ModalBedsAndBath from "../components/Modals/ModalBedsAndBath";
import ModalMore from "../components/Modals/ModalMore";
import ModalPropertyType from "../components/Modals/ModalPropertyType";

const ListProperties = () => {
  const [card, setCard] = React.useState([]);

  React.useEffect(() => {
    // console.log("useEffect");
    obtenerdatos();
  }, []);

  const obtenerdatos = async () => {
    const data = await fetch(`${BASE_URI}/properties`);
    const cards = await data.json();
    console.log(cards);
    setCard(cards);
  };

  return (
    <div>
      <NavbarLanding />
      <StyledContainerFilters>
        <SearchLocationInput className="input-search"/>
        <div className="modal-filter-main">
          <ModalBedsAndBath />
          <ModalPropertyType />
          <ModalMore />
        </div>
      </StyledContainerFilters>
      <div>
        <UlStyles>
          {card.map((item) => (
            <CardComponentPropertyStyles key={item.id}>
              <Link to={`/propertydetail/${item.id}`} className="#">
                <div className="header">
                  <div className="header--width">
                    <div className="header--width__color">
                      <Icons type="price" />
                      <p>{item.operation_type}</p>
                    </div>
                  </div>
                  <div className="bodyCard">
                    <div className="header-body">
                      <div className="header-body--price">
                        <Icons type="dollar" className="dollar" />
                        <p className="price">{item.price}</p>
                      </div>
                      <div className="header-body--price">
                        <Icons type="department" className="department" />
                        <p className="property">{item.property_type}</p>
                      </div>
                    </div>
                    <div className="description">
                      <p>{item.address}</p>
                    </div>
                    <div className="footerCard">
                      <div className="footerCard-number">
                        <Icons type="bed" className="iconsFooter" />
                        <p>{item.bedrooms}</p>
                      </div>
                      <div className="footerCard-number">
                        <Icons type="bath" className="iconsFooter" />
                        <p>{item.bathrooms}</p>
                      </div>
                      <div className="footerCard-number">
                        <Icons type="area" className="iconsFooter" />
                        <p>{item.area} m2</p>
                      </div>
                      <div className="footerCard-number">
                        <Icons type="pet" className="iconsFooter" />
                      </div>
                    </div>
                  </div>
                </div>
                <img src={DefaultImage} alt="Aparment" />
              </Link>
            </CardComponentPropertyStyles>
          ))}
        </UlStyles>
      </div>
      <FooterLanding />
    </div>
  );
};

export default ListProperties;

const UlStyles = styled.ul`
  display: grid;
  grid-gap: 1rem;
  box-sizing: border-box;
  grid-template-columns: 33% 34% 33%;
`;

const StyledContainerFilters = styled.div`
  padding: 20px 200px 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  & > .modal-filter-main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 100px;
  }
  & > .input-search {
    padding: 8px;
  }
`;

const CardComponentPropertyStyles = styled.div` 
    
    width: 300px;
    height: 360px;
    border-radius: 8px;
    background: ${colors.DarkPink};
    margin: 16px 32px 16px 32px;
    
    
    img {
        width: 100%;
        height: 200px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    
    .header {
        width: 300px;
        position: absolute;
    }

    .header--width {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        
        .header--width__color {
            width: 110px;
            padding: 4px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-right-radius: 8px;
            color: ${colors.White};
            background: ${colors.Pink};
            margin: 0 0 173px 0;

            p {
                margin: 0 4px 0 2px;
            }
        }
    }

    .bodyCard {
        background: ${colors.White};
        position: relative;
        
        .header-body {
            display: flex;
            justify-content: space-between;
            margin: 0 10px;
        }

        .header-body--price {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.CardColor};
            
            p {
                font-weight: 400;
                font-style: normal;
                margin: 0 4px;
            }
            
            .price {
                font-size: 24px;
                font-family: 'Montserrat', sans serif;
            }

            .property {
                font-size: 16px;
                font-family: 'Inter', sans serif;
                color:${colors.Gray};
            }

            .dollar {
                font-size: 24px;
            }
            
            .department {
                font-size: 20px;
                color:${colors.Gray};
            }
        }

        .description {
            margin: 2px 8px 28px 8px;
            p {
                color: ${colors.CardColor}
                align-text: justify;
                font-family: 'Montserrat', sans serif;
                font-weight: 400;
                font-style: normal;
                font-size: 18px;
                line-height: 24px;
            }
        }

        .footerCard {
            display: flex;
            padding: 0 0 8px 0;
            margin: 0 0 0 10px;

            .footerCard-number {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 16px 0 0;
            }

            .footerCard-number {
                .iconsFooter {
                    font-size: 20px;
                }

                p {
                    margin: 0 0 0 8px;
                }
            }
        }
    }
`;
