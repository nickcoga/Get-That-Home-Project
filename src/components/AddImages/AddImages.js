import React from 'react';
import Text from '../UI/Heading';
import '../CardProperty/CardProperty.css'
import { ButtonImage } from '../UI/ButtonNavbarWelcome';
import { colors } from '../UI/ColorStyles';
import { 
    AddImagesStyles, 
    UploadPhotoStyles, 
    ButtonUploadStyles, 
    BackgroundPhotosStyles,
    DefaultBackgroundImageStyles,
} from './AddImagesStyles';

const AddImages = () => {
    return (
        <AddImagesStyles>
            <UploadPhotoStyles>
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
                    margin="0"
                >
                    Upload as many photos as you wish
                </Text>

                <ButtonUploadStyles>
                    <ButtonImage
                        nameButton="Choose a file"
                        padding="4px 8px"
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
                        margin="0"
                    >
                        No file chosen
                    </Text>
                    {/*----------------------------*/}

                </ButtonUploadStyles>
                <Text
                        type="Inter" 
                        size="Caption" 
                        color="LightGray" 
                        letter="0.4px"
                        textAlign="justify"
                >
                    Only images, max 5MB
                </Text>
            </UploadPhotoStyles>
            <BackgroundPhotosStyles>
                <DefaultBackgroundImageStyles>
                    <Text
                            type="Inter" 
                            size="Caption" 
                            color="Gray" 
                            letter="0.4px"
                            textAlign="justify"
                    >
                        No photos yet
                    </Text>
                </DefaultBackgroundImageStyles>
            </BackgroundPhotosStyles> 
        </AddImagesStyles>
    )
}

export default AddImages
