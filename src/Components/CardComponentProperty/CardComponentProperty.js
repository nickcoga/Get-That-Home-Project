import styled from '@emotion/styled';
import React from 'react';
import DefaultImage from '../../Images/DefaultImage.svg';
import Icons from '../UI/Icons';
// import Icons from '../UI/Icons';

const CardComponentPropertyStyles=styled.div`
    width: 300px;
    height: 360px;
    border-radius: 8px;
    background: red;
    
    img {
        width: 100%;
        height: 200px;
    }
    
    .header {
        position: absolute;
    }

    .header--color {
        background: yellow;
        display: flex;
        justify-content: flex-end;
        p {
            margin: 0 4px 0 2px;
        }
    }
`;

const CardComponentProperty = () => {
    return (
        <div>
            <CardComponentPropertyStyles>
                <div className="header">
                    <div className="header--color">
                        <Icons type="price"/>
                        <p>For Rental</p>
                    </div>
                </div>
               <img src={DefaultImage} alt='Aparment' />

            </CardComponentPropertyStyles>
        </div>
    )
}

export default CardComponentProperty;
