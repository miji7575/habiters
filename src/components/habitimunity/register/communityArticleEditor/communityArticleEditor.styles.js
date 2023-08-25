import styled from "@emotion/styled";

export const CommunityArticleEditorWrap = styled.div`
    
    width: 880px;
    height: 679px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--color-black7);
    background-color: var(--color-white);

    
    /* 본문 font body2-regular*/
    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    color: var(--color-black3);
 


`

export const CommunityEditorHeader = styled.div`
    
    width: 878px;
    height: 48px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--color-black7);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: var(--color-black10);
    display: flex;
    padding: 12px 24px;
    gap : 24px;

    >div, >label>div{
        display: inline-flex;
        align-items: center;
        gap:8px;
        cursor: pointer;
    }

    /* 투표 icon*/
    >div:first-of-type::before{
        content: '';
        width: 24px;
        height: 24px;
        background-image: url(/image/icon/icon-vote-inbox.svg);
        background-size: 24px 24px;
    }

     /* 이미지 icon*/
    >label>div::before{
        content: '';
        width: 24px;
        height: 24px;
        background-image: url(/image/icon/icon-image-upload.svg);
        background-size: 24px 24px;
    }
    >label>div>span{
        display: inline-flex;
        gap:4px
    }
    >label>div>span>span:last-of-type{
        font-family: 'Pretendard-Medium'; 
        font-size: 12px;
        line-height: 2em;
        align-self: flex-end;

    }

    

`
export const CommunityEditorWrap = styled.div`
    height: 629px;
    box-sizing: border-box;
    overflow-y: scroll;
    padding: 24px;

    width: 100%;
    display: inline-flex;
    flex-direction: column; 
    /* background-color: blue; */


`

export const PostImageWrap = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap : 16px;
    /* background-color: red; */
`

export const CommunityEditor = styled.div`
/* background-color: yellow; */
    width: 100%;
    height: 100%;
   

    box-sizing: border-box;
    resize: none;
    border: none;

   /* 본문 font body2-regular*/
    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    /* color: var(--color-black2); */
    ${props => props.placeholder === props.value ? `
    color: var(--color-black4);`: `
    color: var(--color-black2);`}
    &:focus{
        outline: none;
    }
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        color: var(--color-black4);
    }

    &:empty::before {
        content: attr(placeholder);
        font-family: 'Pretendard-Regular'; 
        font-size: 16px;
        line-height: 24px;
        color: var(--color-black4);

  }

`