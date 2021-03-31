import React from 'react'
import Text from '../UI/Heading'
import '../CardProperty/CardProperty.css'
import ButtonNavbarWelcome from '../UI/ButtonNavbarWelcome'

const FormProperty = () => {
    return (
        <div>
            <Text 
                type="Montserrat" 
                size="H4" 
                color="balck"
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
                    >
                    Operation Type
                </Text>
                <div>
                    <ButtonNavbarWelcome
                        padding="8px 10px"
                        paddingH="7px 9px"
                        nameButton="Rent"
                        size="14px"
                        family="Inter"
                        letter="0.25px"
                        margin="0"
                        BTLR="8px"
                        BTRR="0"
                        BBLR="8px"
                        BBRR="0"
                        // onClick
                    />
                    <ButtonNavbarWelcome
                        padding="8px 10px"
                        paddingH="7px 9px"
                        nameButton="Sale"
                        size="14px"
                        family="Inter"
                        letter="0.25px"
                        margin="0"
                        BTLR="0"
                        BTRR="8px"
                        BBLR="0"
                        BBRR="8px"
                        // onClick
                    />
                </div>
            </div>
        </div>
    )
}

export default FormProperty
