import styled from '@emotion/styled';
import React from 'react';
import LandPageImage from '../../assets/illustration_1.png';
import Text from '../styles/Heading';
import '../CardComponentProperty/CardComponentProperty.css'
import NavbarWelcome from '../NavbarWelcome/NavbarWelcome';
import NavbarLanding from '../UI/NavbarLanding';
import CardComponentProperty from '../CardComponentProperty/CardComponentProperty';

const LandPageStyles=styled.div`
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
    }
    
`;

const LandPage = () => {
    return (
        <LandPageStyles>
            <NavbarLanding />
            <div className="landPage">
                <div className="secondHeader">
                    <div className="secondHeader--styles">
                        <Text type='Montserrat' size='H2'>Meet your new home</Text>
                        <Text type='Montserrat' size='H5'>The easiest way to find where you belong</Text>
                        <NavbarWelcome />
                    </div>
                </div>
                <img src={LandPageImage} alt="Buildings" />
                <div className="box-cards">
                    <Text type='Montserrat' size='Subtitle2'>Find an Apartment you Love</Text>
                    <Text type='Montserrat' size='H4' color='DarkPink'>Homes for rent at the best prices</Text>
                    
                    {/* ¡IMPORTANTE!: por el momento esto ira asi, despues le pondre el map */}
                    <div className="box-cards--properties">
                        <CardComponentProperty />
                        <CardComponentProperty />
                        <CardComponentProperty />
                    </div>
                </div>
            </div>
        </LandPageStyles>
    )
}

export default LandPage;
