import styled from "@emotion/styled";





export const CommentContent = styled.div`
    white-space: pre-line;
`




export const CommentInfoWrap = styled.div`
  font-family: 'Pretendard-Regular'; 
  font-size: 12px;
  line-height: 16px;
  color : var(--color-black3);

  display: flex;
  justify-content: space-between;


`

export const CommentInfoLeft = styled.div`

    display: flex;
    align-items: center;

    > div:first-of-type{
        display: flex;
        align-items: center;
    }
    > div:first-of-type::after{
        content: "";
        display: block;
        margin: 0px 8px 0px 8px ;
        width: 1px;
        height: 10px;
        background-color: var(--color-black5);
        
    }

`
export const CommentInfoRight = styled.div`
    display: flex;
    align-items: center;
    gap : 16px;

    >div{
        display: flex;
        align-items: center;
        gap: 4px;
    }
`

export const IconLikeBefore = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(/image/icon/icon-emoji-like-before.svg);
`
export const IconLikeAfter = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(/image/icon/icon-emoji-like.svg);
    background-size: 24px 24px;
`

export const IconCommunication = styled.div`
     width: 24px;
    height: 24px;
    background-image: url(/image/icon/icon-commnuication.svg);
`



export const CommentReplyWrap = styled.div`
    display: flex;
    padding: 20px 24px;
    gap : 8px;
    position: relative;

    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    color: var(--color-black2);
    background-color: ${props => props.index % 2 === 0 ? `var(--color-black10)` : `var(--color-white)`};
`

export const CommentReplyContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap : 16px;
   
`


export const IconReply = styled.div`
    width: 10px;
    height: 10px;
    background-image: url(/image/icon/icon-reply.svg);
`