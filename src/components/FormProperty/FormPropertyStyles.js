import { css } from '@emotion/react';
import styled from '@emotion/styled';

const InputWithIconStyles = styled.div(
    ({}) => css`
        padding: 0;
        display: flex;

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
`);

export {InputWithIconStyles, PropertyTypeStyles, CheckboxStyles, PropertyButtonsStyles}
