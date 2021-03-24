import { css } from '@emotion/react';
import React from 'react';
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const iconSet = {
    dollar: RiMoneyDollarCircleLine,
}

const Icons = ({
    type,
    color,
}) => {
    const ComponentToRender = iconSet[type];
    return (
        <ComponentToRender
            css={ css`
                color: ${color};
            `}
        />
    )
}

export default Icons
