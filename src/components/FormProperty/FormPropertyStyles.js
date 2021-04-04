import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../UI/ColorStyles';

const InputWithIconStyles = styled.div(
    ({}) => css`
        padding: 0;
        display: flex;
        align-items: center;

        .maintanance {
            padding: 2px 4px;
            border: green solid 2px;
        } 
        
        .montlyRent {
            padding: 2px 4px;
            border: green solid 2px;
        }
    `
);

const PropertyTypeStyles = styled.div(
    ({}) => css`
    display: flex;
`);

const PropertyButtonsStyles = styled.div(
    ({}) => css`
    display: flex;
`);

const CheckboxStyles = styled.div(
    ({}) => css`
    display: flex;
    align-items: center;
    margin: 0 16px 0 0;
    input {
        margin: 0 4px 8px 0;
    }

    .checkbox {
        box-sizing: border-box;
        appearance: none;
        background: white;
        border: 2px solid ${colors.Gray};
        width: 16px;
        height: 16px;
        outline: none;
    }

    .checkbox:checked {
        border: 2px solid white;
        outline: ;
        background: #333;
    }
`);

export {InputWithIconStyles, PropertyTypeStyles, CheckboxStyles, PropertyButtonsStyles}
