import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles/ColorStyles';
import '../CardComponentProperty/CardComponentProperty.css'

const ButtonNavbarWelcomeStyles=styled.button(({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    size,
    family,
    letter,
}) => css`
    padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
    box-sizing: border-box;
    text-align: center;
    border-radius: 16px;
    border: none;
    background: ${colors.Pink};
    color: ${colors.White};
    font-size: ${size};
    line-height: 24px;
    cursor: pointer;
    font-family: ${family};
    letter-spacing: ${letter};
    
    &:hover {
    background: ${colors.White};
    color: ${colors.Pink};
    border: ${colors.Pink} solid 1px;
    letter-spacing: ${letter};
    }
`);

const ButtonNavbarWelcome = ({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    nameButton,
    size,
    family,
    onClick,
    letter,
}) => {
    return (
        <ButtonNavbarWelcomeStyles
            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            onClick={onClick}
            size={size}
            family={family}
            letter={letter}
        >
            {nameButton}
        </ButtonNavbarWelcomeStyles>
    )
}

export default ButtonNavbarWelcome;
