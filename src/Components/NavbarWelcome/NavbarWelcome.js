import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles/ColorStyles';

const NavbarWelcomeStyles=styled.div`
    width: 800px;
    height: 72px;
    box-shadow: 0 8px 8px ${colors.ShadowBox};
    border-radius: 8px;
    padding: 8px 16px;
    background: red;
`;

const NavbarWelcome = () => {
    return (
        <div>
            <h1>Navbar Welcome</h1>
            <NavbarWelcomeStyles>
                
            </NavbarWelcomeStyles>
        </div>
    )
}

export default NavbarWelcome;
