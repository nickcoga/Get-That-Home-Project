import styled from '@emotion/styled';
import React from 'react';
import LandPageImage from '../../assets/illustration_1.png';
import Text from '../styles/Heading';
import '../CardComponentProperty/CardComponentProperty.css'
import NavbarWelcome from '../NavbarWelcome/NavbarWelcome';
import NavbarLanding from '../UI/NavbarLanding';

const LandPageStyles=styled.div`
    background: red;
    width: 100%;
    
    .landPage {
        width: 100%;
        display: flex;
        justify-content: center;
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
    }
    
`;

const LandPage = () => {
    return (
        <LandPageStyles>
            <div className="landPage">
                <div className="secondHeader">
                    <div className="secondHeader--styles">
                        <Text type='Montserrat' size='H2'>Meet your new home</Text>
                        <Text type='Montserrat' size='H5'>The easiest way to find where you belong</Text>
                        <NavbarWelcome />
                    </div>
                </div>
                <img src={LandPageImage} alt="Buildings" />
            </div>
        </LandPageStyles>
    )
}

export default LandPage;
