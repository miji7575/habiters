import styled from '@emotion/styled'


export const TextareaBox = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-black4);
    /* width: auto ; */
    width: ${(props) => props.width || `239px` };
    margin: ${(props) => props.margin || 0 };
    
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
    border: solid 1px var(--color-black7);
    color: var(--color-black4);
   
`

// export const TextareaOn = styled.textarea(TextareaDefault)`
//  color: var(--color-black2);
// `

export const TextareaError = styled(TextareaDefault)`
 color: var(--color-error);
`

// export const TextareaNonEditable = styled.textarea(TextareaDefault)`

// `



export const TextareaExplain = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
`
