import styled from "@emotion/styled";
import { BtnLargePrimary } from '../../../commons/buttons';

export const CommentInputWrap = styled.div`
    display: flex;
    position: relative;

    height: 144px;
    padding: 24px;

    ${(props) => props.isEditingComment === true ?`
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        ` :`
        margin-bottom: 20px;
        border-radius: 8px;
        border:  1px solid var(--color-black7);
        `}
`
export const CommentInput = styled.textarea`
  
    width: 100%;
    height: 100%;
    margin-right: 85px;
    box-sizing: border-box;
    border : none;


    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    color : var(--color-black2);
    
    resize: none;
   
    &:focus{
        outline: none;
    }
    &:focus-visible {
        border : none;
        outline: none;
    }
    &::placeholder {
        color: var(--color-black4);
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

export const SubmitButton = styled(BtnLargePrimary)`

    position: absolute;
    bottom: 24px;
    right: 24px;
    cursor: pointer;
`