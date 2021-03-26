import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles/ColorStyles';
import Icons from '../UI/Icons';

const FieldContainer=styled.div`
    display: flex;
    flex-direcion: column;
    gap: 2px;
    .down {
        color: green;
    }
`;

const StyledSelect=styled.select`
    border: none;
    width: 100%;
    color: ${colors.LightGray};

    &:focus {
        outline:none;
    }

    &::placeholder{
        color: ${colors.Pink};
    }

    option:first-of-type {
        color: red;
    }
    
    option {
        color: ${colors.Gray};
    }
`;

const SelectOptions = ({
    name="", 
    placeholder="",
    options=[],
    value,
    onChange,

}) => {
    return (
        <FieldContainer>
            <StyledSelect
                type="select"
                value={value}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={onChange}
            >
                <option disabled value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </StyledSelect>
        </FieldContainer>
    )
}

export default SelectOptions;
