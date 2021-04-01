import React from 'react';
import Text from '../UI/Heading';
import '../CardProperty/CardProperty.css';
import ButtonNavbarWelcome from '../UI/ButtonNavbarWelcome';
import { colors } from '../UI/ColorStyles';
import { InputPlace } from '../InputPlace/InputPlace';

const FormProperty = () => {
    return (
        <div>
            <Text 
                type="Montserrat" 
                size="H4" 
                color="balck"
                textAlign="justify"
            >
                Create a property listing
            </Text>
            <div>
                <Text 
                    type="Inter" 
                    size="Subtitle1" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                    >
                    Operation Type
                </Text>
                <div>
                    <ButtonNavbarWelcome
                        padding="8px 10px"
                        margin="0"
                        size="14px"
                        family="Inter"
                        letter="0.25px"
                        nameButton="rent"
                        backgroundH={colors.Pink}
                        background={colors.White}
                        colorH={colors.White}
                        color={colors.Gray}
                        borderColorH={colors.Gray}
                        borderColor={colors.Gray}
                        borderSizeH="1px"
                        borderSize="1px"
                        BTLR="8px"
                        BTRR="0"
                        BBLR="8px"
                        BBRR="0"
                        transform="capitalize"
                        // onClick
                    />
                    <ButtonNavbarWelcome
                        padding="8px 10px"
                        margin="0"
                        size="14px"
                        family="Inter"
                        letter="0.25px"
                        nameButton="sale"
                        backgroundH={colors.Pink}
                        background={colors.White}
                        colorH={colors.White}
                        color={colors.Gray}
                        borderColorH={colors.Gray}
                        borderColor={colors.Gray}
                        borderSizeH="1px"
                        borderSize="1px"
                        BTLR="0"
                        BTRR="8px"
                        BBLR="0"
                        BBRR="8px"
                        transform="capitalize"
                        // onClick
                    />
                </div>
            </div>
            <div>
                <InputPlace />
            </div>
        </div>
    )
}

export default FormProperty
