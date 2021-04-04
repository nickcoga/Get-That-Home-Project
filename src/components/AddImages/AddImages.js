import React from 'react';
import Text from '../UI/Heading';
import '../CardProperty/CardProperty.css'
import { ButtonImage } from '../UI/ButtonNavbarWelcome';
import { colors } from '../UI/ColorStyles';

const AddImages = () => {
    return (
        <div>
            <div>
                <Text
                    type="Montserrat" 
                    size="H6" 
                    color="Gray" 
                    letter="0.4px"
                    transform="capitalize"
                    textAlign="justify"
                >
                    photos
                </Text>

                <Text
                    type="Inter" 
                    size="Overline" 
                    color="Gray" 
                    letter="1.5px"
                    transform="uppercase"
                    textAlign="justify"
                >
                    Upload as many photos as you wish
                </Text>

                <div>
                    <ButtonImage
                        nameButton="Choose a file"
                        padding="8px"
                        margin="0 8px 0 0"
                        size="14px"
                        family="Inter"
                        letter="0.25px"
                        backgroundH={colors.White}
                        background={colors.Pink}
                        colorH={colors.Pink}
                        color={colors.White}
                        borderColorH={colors.Pink}
                        borderColor={colors.Pink}
                        borderRadius="8px"
                        borderSizeH="1px"
                        borderSize="1px"
                        className="choose-a-file"
                        // onClick={onClick}
                    />
                    
                    {/* THERE IS A CONDITION HERE */}
                    <Text
                        type="Inter" 
                        size="Body2" 
                        color="Gray" 
                        letter="0.4px"
                        textAlign="justify"
                    >
                        No file chosen
                    </Text>
                    {/*----------------------------*/}

                </div>
                <Text
                        type="Inter" 
                        size="Caption" 
                        color="Gray" 
                        letter="0.4px"
                        textAlign="justify"
                >
                    Only images, max 5MB
                </Text>
            </div>
            <div className="background-photos">
                <div className="background-photos--first-photo">
                    <Text
                            type="Inter" 
                            size="Caption" 
                            color="Gray" 
                            letter="0.4px"
                            textAlign="justify"
                    >
                        No photos yet
                    </Text>
                </div>
            </div> 
        </div>
    )
}

export default AddImages
