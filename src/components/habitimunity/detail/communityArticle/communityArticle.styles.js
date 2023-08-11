import styled from "@emotion/styled";

export const ArticleWrap = styled.div`

    display: flex;
    flex-direction: column;
    padding: 20px 24px 40px 24px;

    border-radius: 8px;
    border: 1px solid var(--color-black7);
    background: var(--color-white);
    margin-bottom: 48px;

`





export const ArticleTopSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px; 
`
export const ArticleCategoryBookMark = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
`
export const ArticleTitle = styled.div`
    color : var(--color-black1);
    font-family: 'Pretendard-Bold'; 
    font-size: 20px;
    line-height: 28px;
    padding-bottom: 12px;

`
export const ArticleInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Pretendard-Regular'; 
    font-size: 12px;
    line-height: 16px;
    color : var(--color-black3);
    
`
export const ArticleInfoLeft = styled.div`

    display: flex;
    align-items: center;

    > div:nth-of-type(2){
        display: flex;
        align-items: center;
    }
    > div:nth-of-type(2)::after{
        content: "";
        display: block;
        margin: 0px 8px 0px 8px ;
        width: 1px;
        height: 10px;
        background-color: var(--color-black5);
        
    }

`

export const UserProfileImgWrap = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 0.75px solid var(--color-black7);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
`
export const UserProfileImg = styled.img`
    width: 14px;
    height: 14px;
    object-fit: contain;
`

export const ArticleInfoRight = styled.div`
    display: flex;
    align-items: center;
`







export const ArticleContentWrap = styled.div`
    padding: 8px;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
    line-height: 24px;
    white-space: pre-line;
   
`
export const EmojiClusterWrap = styled.div`
    display: flex;
    justify-content: center;

`

