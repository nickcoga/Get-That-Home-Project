import styled from '@emotion/styled';
import { colors } from '../UI/ColorStyles';
import '../CardProperty/CardProperty.css';

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

    .input-file {
        padding: 4px 8px;
    }

    .input-file {
        color: ${colors.Gray};
        font-family: 'Inter';
        font-weight: 400;
        line-height: 20px;
        font-size: 14px;
        font-style: normal;
        outline: none;
    }

    .input-file::-webkit-file-upload-button {
        background: ${colors.Pink};
        border: ${colors.Pink} solid 1px;
        color: ${colors.White};
        border-radius: 8px;
        padding: 8px;
        margin: 0 8px 0 0;
        outline: none;
    }

    .input-file::-webkit-file-upload-button:hover {
        background: ${colors.White};
        color: ${colors.Pink};
    }
`;

const BackgroundPhotosStyles = styled.div`
    width: 600px;
    height: 136px;
    padding: 8px;
    margin: 16px 0;
    background: ${colors.Background};
`;

export {AddImagesStyles, UploadPhotoStyles, ButtonUploadStyles, BackgroundPhotosStyles };
