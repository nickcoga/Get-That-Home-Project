import { css } from '@emotion/react';
import React from 'react';
import { 
    RiMoneyDollarCircleLine,
    RiBuildingLine,
    RiCoinsLine,
 } from "react-icons/ri";

 import { 
     BiBed,
     BiBath,
     BiArea,
} from "react-icons/bi";

import {
    MdPets,
} from "react-icons/md";

const iconSet = {
    dollar: RiMoneyDollarCircleLine,
    department: RiBuildingLine,
    bed: BiBed,
    bath: BiBath,
    area: BiArea,
    pet: MdPets,
    price: RiCoinsLine,
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
