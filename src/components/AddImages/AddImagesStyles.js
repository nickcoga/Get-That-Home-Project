import styled from '@emotion/styled';
import { colors } from '../UI/ColorStyles';

const AddImagesStyles = styled.div`
    padding: 0;
    margin: 16px 0;
`;

const UploadPhotoStyles = styled.div`
    padding: 0;
    margin: 8px 0 16px 0;
`;

const ButtonUploadStyles = styled.div`
    padding: 0;
    margin: 4px 0;
    display: flex;
    align-items: center;
`;

const BackgroundPhotosStyles = styled.div`
    width: 584px;
    height: 124px;
    padding: 8px;
    margin: 16px 0;
    background: ${colors.Background};
`;

const DefaultBackgroundImageStyles = styled.div`
    width: 120px;
    height: 120px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: ${colors.BackgroundLight};
`;

export {AddImagesStyles, UploadPhotoStyles, ButtonUploadStyles, BackgroundPhotosStyles, DefaultBackgroundImageStyles};
