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
`

export const ErrorIcon = styled.span`
    background-color: var(--color-error);
    position: absolute;
    right: 12px;

`


