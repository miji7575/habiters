import styled from '@emotion/styled'


export const InputWrap = styled.div`
            display: inline-flex;
            flex-direction: column;
`

export const InputBox = styled.div`
            display: inline-flex;
            align-items: center;
            position: relative;
`

export const Input = styled.input`
    padding: 0 48px 0 12px;     
    height: var(--header-height);
    width: ${(props) => props.width || `380px`};
    height: 48px;
    box-sizing: border-box;
    border: ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `solid 1px var(--color-black7)`};
    border-radius: 8px;
    color: ${(props) => props.isError === true ? `var(--color-error)` : `var(--color-black2);`}; 

    /* body3-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    line-height: 20px;


    &:focus{
        outline: none;
    }
    &:focus-visible {
        border :  ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `1px solid var(--color-black4)`};
        outline: none;
    }
    &::placeholder {
    color: var(--color-black4);
    }
    `


export const InputMessage = styled.div`
    padding-top: 4px;
    color: var(--color-error);
        /* caption1-regular */
    font-family: 'Pretendard-Regular'; 
    font-size: 12px;
    line-height: 16px;

`
export const CloseIcon = styled.span`
    display: inline-block;
    width: var(--icon-size-m);
    height: var(--icon-size-m);

    background-size: var(--icon-size-m) var(--icon-size-m);
    -webkit-mask-size: var(--icon-size-m) var(--icon-size-m);
    cursor: pointer;

    background-color: var(--color-black4);
    background-repeat: no-repeat;
    -webkit-mask-image: url(/image/icon/icon-close-circle.svg);
    -webkit-mask-repeat: no-repeat;


    position: absolute;
    right: 12px;

`


export const ErrorIcon = styled.span`
    display: inline-block;
    width: var(--icon-size-m);
    height: var(--icon-size-m);

    position: absolute;
    right: 12px;

    background-color: var(--color-error);
    background-repeat: no-repeat;
    background-size: var(--icon-size-m) var(--icon-size-m);
    -webkit-mask-image: url(/image/icon/icon-error.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: var(--icon-size-m) var(--icon-size-m);
   


`


