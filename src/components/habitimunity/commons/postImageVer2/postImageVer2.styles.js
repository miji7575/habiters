import styled from "@emotion/styled";

export const PostImageUploader = styled.label`
    padding: 10px;
    background-color: gray;
    width: 150px;
    height: 20px;

`


export const ImageWrap = styled.div`
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    background-color: red;

`

export const ImageLabel = styled.label`
    display: inline-flex;
    box-sizing: border-box;
    min-width: 380px;
    min-height: 380px;
    cursor: copy;
    background-color: var(--color-black9);

`


export const SelectedImage = styled.img`
    min-width: 380px;
    min-height: 380px;
    max-width: 832px;
    object-fit: contain;
    top:0;
    left: 0;
`


export const ThumbnailLabel = styled.span`
    display: inline-flex;
    position: absolute;
    top:12px;
    left:12px;
    padding: 4px 8px;
    border-radius: 4px;
    z-index: 970;
    cursor: pointer;

    font-family: 'Pretendard-Medium'; 
    font-size: 12px;

    ${props => props.isThumbnail ? `
        color : var(--color-white);
        background-color: var(--color-purple2);
    ` : `
        color : var(--color-black4);
        background-color: var(--color-white);
    `}
    >span{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

    }
    >span::before{
        content:'';
        width: 16px;
        height: 16px;
       -webkit-mask-size: 16px 16px;
       -webkit-mask-image: url(/image/icon/icon-check.svg);
       -webkit-mask-repeat: no-repeat;
       ${props => props.isThumbnail ? `
            background-color: var(--color-white);
        ` : `
            background-color: var(--color-black4);
        `}
    }
`

export const DeleteImageIcon = styled.span`
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    position: absolute;
    top : 12px;
    left: calc(100% - 44px);
    z-index: 970;
    width: 32px;
    height: 32px;
    border : 1px solid var(--color-purple2);
    box-sizing: border-box;
    border-radius: 16px;
    background-color: var(--color-white);
    cursor: pointer;
    
    >span{
        width: 16px;
        height: 16px;
       -webkit-mask-size: 16px 16px;
       -webkit-mask-image: url(/image/icon/icon-delete.svg);
       -webkit-mask-repeat: no-repeat;
       background-color: var(--color-purple2);
    }
`



export const HiddenFileInput = styled.input`
    display: none;
`

