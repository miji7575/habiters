import styled from '@emotion/styled'


export const InputWrap = styled.div`
            display: inline-flex;
            flex-direction: column;
            position: relative;

            /* font body3-medium */
            font-family: 'Pretendard-Medium'; 
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;
`

export const InputBox = styled.div`
            display: inline-flex;
            align-items: center;
            position: relative;
`

export const Input = styled.input`
    padding: 14px 40px 14px 12px;     
    width: ${(props) => props.width || `500px`};
    height: 48px;
    box-sizing: border-box;
    border: ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `solid 1px var(--color-black7)`};
    border-radius: 8px;

        /* font body3-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black2); 

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
    position: absolute;
    bottom : -16px;
    color: ${(props) => props.isError === true ? `var(--color-error)` : `var(--color-black2);`}; 

    /* Caption1/Regular */
    font-family: 'Pretendard-Regular'; 
    font-size: 10px;
    line-height: 12px;
`



