import styled from "@emotion/styled";

export const CommunityArticleEditorWrap = styled.div`

    width: 880px;
    height: 679px;
    box-sizing: border-box;

    border-radius: 8px;
    border: 1px solid var(--color-black7);

    background-color: var(--color-white);
    padding: 20px 24px 40px 24px;


    /* 본문 font */
    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    color: var(--color-black2);
    /* color:var(--color-black4) => placeholder */
 


`

export const CommunityEditor = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 16px;

    box-sizing: border-box;
    resize: none;
    border-radius: 8px;
    border: ${(props) => props.isError === true ? `solid 1px var(--color-error)` : `solid 1px var(--color-black7)`};
    color : var(--color-black2);
    /* color : ${(props) => props.isError === true ? `var(--color-error)` : `var(--color-black2)`}; */
    background-color:${(props) => props.diaryState === true ? `var(--color-black8)` : 'none'};
`