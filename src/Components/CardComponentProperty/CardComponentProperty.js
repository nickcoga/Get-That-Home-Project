import styled from '@emotion/styled';
import React from 'react';
import DefaultImage from '../../Images/DefaultImage.svg';
import { colors } from '../styles/ColorStyles';
import Icons from '../UI/Icons';
// import Icons from '../UI/Icons';

const CardComponentPropertyStyles=styled.div`
    width: 300px;
    height: 360px;
    border-radius: 8px;
    background: red;
    margin: 16px 43px 16px 32px;
    
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
        position: relative;
        background: cyan;

        .header-body {
            display: flex;
            justify-content: space-between;
        }

        .header-body--price {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.CardColor};
            
            p {
                margin: 0;
                font-weight: 400;
                font-style: normal;
            }
            
            .price {
                font-size: 24px;
                font-family: 'Montserrat', sans serif;
            }
            .property {
                font-size: 16px;
                font-family: 'Inter', sans serif;
            }
            .dollar {
                font-size: 24px;
            }
        }
    }
`;

const CardComponentProperty = ({
    image=DefaultImage,
    stateProperty='For Rental',
    priceProperty=3000,
    typeProperty='Apartment'
}) => {
    return (
        <div>
            <CardComponentPropertyStyles>
                <div className="header">
                    <div className="header--width">
                        <div className="header--width__color">
                            <Icons type="price"/>
                            <p>{stateProperty}</p>
                        </div>
                    </div>
                    <div className="bodyCard">
                        <div className="header-body">
                            <div className="header-body--price">
                                <Icons type="dollar" className="dollar"/>
                                <p className="price">{priceProperty}</p>
                            </div>
                            <div className="header-body--price">
                                <Icons type="department" className="department"/>
                                <p className="property">{typeProperty}</p>
                            </div>
                        </div>
                    </div>
                </div>
               <img src={image} alt='Aparment' />

            </CardComponentPropertyStyles>
        </div>
    )
}

export default CardComponentProperty;
