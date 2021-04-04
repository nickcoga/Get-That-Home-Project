import React from 'react';
import Text from '../UI/Heading';
import '../CardProperty/CardProperty.css';
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
                    <input type="file" name="file" className="input-file"/>

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
