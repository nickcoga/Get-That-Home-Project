import React from 'react';
import Text from '../UI/Heading';
import '../CardProperty/CardProperty.css';
import { 
    AddImagesStyles, 
    UploadPhotoStyles, 
    ButtonUploadStyles, 
    BackgroundPhotosStyles,
} from './AddImagesStyles';
import { ButtonNavbarWelcome } from '../UI/ButtonNavbarWelcome';
import { colors } from '../UI/ColorStyles';
import '../CardProperty/CardProperty.css'

const AddImages = ({handleUpload, fileValue, handleChange,}) => {
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
                    <input 
                        type="file" 
                        id='input'
                        name="image-upload" 
                        className="input-file"
                        accept='image/*'
                        onChange={handleChange}
                        multiple
                    />

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
                <ButtonNavbarWelcome
                    nameButton="upload"
                    padding="4px 8px"
                    margin="4px 0"
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
                    transform="capitalize"
                    className="choose-a-file"
                    onClick={handleUpload}
                />
            </UploadPhotoStyles>
            <BackgroundPhotosStyles>
                <div className="background-images">
                    <Text
                            type="Inter" 
                            size="Caption" 
                            color="Gray" 
                            letter="0.4px"
                            textAlign="justify"
                    >
                        No photos yet
                    </Text>
                        <img 
                            src={fileValue} 
                            alt='property photo'
                        />
                </div>
            </BackgroundPhotosStyles> 

            <ButtonNavbarWelcome
                nameButton="Publish property listing"
                padding="16px 24px"
                margin="0 8px 0 0"
                size="16px"
                family="Inter"
                letter="0.25px"
                backgroundH={colors.White}
                background={colors.Pink}
                colorH={colors.Pink}
                color={colors.White}
                borderColorH={colors.Pink}
                borderColor={colors.Pink}
                borderRadius="16px"
                borderSizeH="1px"
                borderSize="1px"
                className="choose-a-file"
                // onClick={onClick}
            />
        </AddImagesStyles>
    )
}

export default AddImages
