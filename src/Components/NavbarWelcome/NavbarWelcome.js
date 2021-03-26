import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles/ColorStyles';
import ButtonNavbarWelcome from './ButtonNavbarWelcome';
import '../CardComponentProperty/CardComponentProperty.css'

const NavbarWelcomeStyles=styled.div`
    width: 800px;
    height: 56px;
    box-shadow: 0 8px 8px ${colors.ShadowBox};
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;

const LeftOptionsStyles=styled.div`
    width: 168px;
    height: 56px;
    padding: 0 8px;
    margin: 0 8px 0 0;
    border-right: ${colors.BackgroundLight} solid 1px;
`;

const RightOptionsStyles=styled.div`
    width: 312px;
    height: 56px;
    padding: 0 8px;
    margin: 0 8px 0 0;
    border-right: ${colors.BackgroundLight} solid 1px;
`;

const HeaderNavbarStyles=styled.p`
    text-transform: uppercase;
    color: ${colors.HeaderNavbar};
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 1.5px;
`;



const NavbarWelcome = () => {
    return (
        <div>
            <h1>Navbar Welcome</h1>
            <NavbarWelcomeStyles>
                <LeftOptionsStyles>
                    <HeaderNavbarStyles>i'm looking for</HeaderNavbarStyles>
                </LeftOptionsStyles>
                <LeftOptionsStyles>
                    <HeaderNavbarStyles>i want to</HeaderNavbarStyles>
                </LeftOptionsStyles>
                <RightOptionsStyles>
                    <HeaderNavbarStyles>where</HeaderNavbarStyles>
                </RightOptionsStyles>
                <ButtonNavbarWelcome 
                    paddingTop="8px"
                    paddingRight="16px"
                    paddingBottom="8px"
                    paddingLeft="16px"
                    nameButton="SEARCH"
                    size="14px"
                    family='Inter'
                    letter="1.25px"
                />
            </NavbarWelcomeStyles>
        </div>
    )
}

export default NavbarWelcome;
