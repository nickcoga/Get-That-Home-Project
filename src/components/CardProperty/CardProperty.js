import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../../assets/DefaultImage.svg";
import { colors } from "../UI/ColorStyles";
import Icons from "../UI/Icons";
import "./CardProperty.css";

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

const CardComponentProperty = ({
  image = DefaultImage,
  stateProperty = "For Rental",
  priceProperty = 3000,
  typeProperty = "Apartment",
  information = "86872 Jacob Gateway, Durganport, WV 48044",
  bed = 4,
  bath = 2,
  area = 180,
}) => {
  return (
    <div>
      <CardComponentPropertyStyles>
        <Link to="/propertydetail" className="#">
          <div className="header">
            <div className="header--width">
              <div className="header--width__color">
                <Icons type="price" />
                <p>{stateProperty}</p>
              </div>
            </div>
            <div className="bodyCard">
              <div className="header-body">
                <div className="header-body--price">
                  <Icons type="dollar" className="dollar" />
                  <p className="price">{priceProperty}</p>
                </div>
                <div className="header-body--price">
                  <Icons type="department" className="department" />
                  <p className="property">{typeProperty}</p>
                </div>
              </div>
              <div className="description">
                <p>{information}</p>
              </div>
              <div className="footerCard">
                <div className="footerCard-number">
                  <Icons type="bed" className="iconsFooter" />
                  <p>{bed}</p>
                </div>
                <div className="footerCard-number">
                  <Icons type="bath" className="iconsFooter" />
                  <p>{bath}</p>
                </div>
                <div className="footerCard-number">
                  <Icons type="area" className="iconsFooter" />
                  <p>{area} m2</p>
                </div>
                <div className="footerCard-number">
                  <Icons type="pet" className="iconsFooter" />
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt="Aparment" />
        </Link>
      </CardComponentPropertyStyles>
    </div>
  );
};

export default CardComponentProperty;
