import styled from "@emotion/styled";
import { BtnMediumPrimary } from '../../../commons/buttons';

export const CommentReplyInputWrap = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;

    height: 88px;
    box-sizing: border-box;
    padding: 20px 24px;
    
    background-color: ${props=>props.backgroundColor%2 === 1 ? `var(--color-white)` : `var(--color-black10)`};
   
   

`
export const CommentReplyInput = styled.textarea`
  
    width: 100% ;
    height: 48px;
    padding: 12px 14px;
    box-sizing: border-box;
    border : 1px solid var(--color-black7);
    border-radius: 8px;
    background-color: var(--color-white);


    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    line-height: 20px;
    color : var(--color-black2);
    
    resize: none;
   
    &:focus{
        outline: none;
    }
    &:focus-visible {
        border : 1px solid var(--color-black7);
        outline: none;
    }
    &::placeholder {
        color: var(--color-black4);
    }

    

    &::-webkit-scrollbar{
    width: 8px;
    }
    ::-webkit-scrollbar-thumb{
    height: 10%; /* 스크롤바의 길이 */
    background: var(--color-black7); /* 스크롤바의 색상 */
    border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    background: transparent;
    }
    

`

export const IconReply = styled.div`
    width: 10px;
    height: 10px;
    background-image: url(/image/icon/icon-reply.svg);
`

export const SubmitButton = styled(BtnMediumPrimary)`
    cursor: pointer;
    align-self: center;
    >div{
        width: max-content;
    }
`