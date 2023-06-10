import styled from '@emotion/styled'


export const TextareaBox = styled.div`
    display: flex;
    flex-direction: column;
    /* color: var(--color-black4); */
    color : ${(props) => props.isError === true ? `var(--color-error)` : `var(--color-black4)`};
    /* width: auto ; */
    width: ${(props) => props.width || `239px`};
    margin: ${(props) => props.margin || 0};
    
    box-sizing: border-box;
    

`
// export const TextareaBoxError = styled.div(TextareaBox)`
//     color: var(--color-error);
// `








export const TextareaDefault = styled.textarea`
    /* height: 272px ; */
    height: ${(props) => props.height || `auto`};
    padding: 16px;
    box-sizing: border-box;
    resize: none;
    border-radius: 8px;
    border: ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `solid 1px var(--color-black7)`};
    color : var(--color-black2);
    /* color : ${(props) => props.isError === true ? `var(--color-error)` : `var(--color-black2)`}; */
    background-color:${(props) => props.diaryState === true ? `var(--color-black8)` : 'none'};

    &:focus{
        outline: none;
    }
    &:focus-visible {
        border :  ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `1px solid var(--color-black4)`};
        outline: none;
    }
    &::placeholder {
    /* color: var(--color-black4); */
    }

    &:disabled{
        background-color: var(--color-black8);
    }





    &::-webkit-scrollbar{
    width: 8px;
    }
    ::-webkit-scrollbar-thumb{
    height: 30%; /* 스크롤바의 길이 */
    background: var(--color-black7); /* 스크롤바의 색상 */
    border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    background: transparent;
    }
`

// export const TextareaOn = styled.textarea(TextareaDefault)`
//  color: var(--color-black2);
// `

// export const TextareaError = styled(TextareaDefault)`
//  color: var(--color-error);
// `

// export const TextareaNonEditable = styled.textarea(TextareaDefault)`

// `



export const TextareaExplain = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
`
