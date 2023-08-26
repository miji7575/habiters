import styled from '@emotion/styled'



export const PopupBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 980;
    background: rgba(0, 0, 0, 0.8);
`


export const VoteFormPopUpWrap = styled.div`
    z-index: 990;
    width: 580px;
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    border-radius: 24px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* box-shadow: 3px 3px 3px 3px black; */

    position: absolute;
    top : 100px;
    left: calc(50vw - (580px / 2));
    `

export const PopupTitleWrap = styled.div`
    color: var(--color-black1);
    font-family: 'Pretendard-Bold'; 
    font-size: 20px;
    line-height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  

`

export const CloseIcon = styled.div`
    -webkit-mask-size: 32px 32px;
    -webkit-mask-image: url(/image/icon/icon-close-line.svg);
    -webkit-mask-repeat: no-repeat;
    background-color: var(--color-black1);
    width: 32px;
    height: 32px;

    cursor: pointer;
`

export const Divider = styled.div`

height: 16px;
border-top: 1px solid var(--color-black7);
`


export const VoteTitleWrap = styled.div`
    padding-bottom: 16px;
`

export const AddItemBtn = styled.div`
    width : 532px;
    height: 48px;
    border: 1px solid var(--color-black2);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    /* font */
    font-family: 'Pretendard-Medium'; 
    font-size: 16px;
    line-height: 24px;


    > div{
        display: inline-flex;
        align-items: center;
        gap:8px;
        color: var(--color-black2)
        
    }
     > div::before{
        content: '';
        -webkit-mask-size: 10px 10px;
        -webkit-mask-image: url(/image/icon/icon-add-thin.svg);
        -webkit-mask-repeat: no-repeat;
        background-color: var(--color-black1);
        width: 10px;
        height: 10px;
        
    } 
 
`

export const VotingOptionsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-self: flex-start;

`

export const VotingOption = styled.div`
 display: flex;

    >div:first-of-type{
        padding-right: 24px;
    }
    >div:last-of-type{
        margin-left: 12px;
    }
`

export const RegVoteBtn = styled.div`
    display: flex;
    width: 380px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--color-purple2);
    align-self: center;
    color:var(--color-white);
    font-family: 'Pretendard-Medium'; 
  font-size: 16px;
  line-height: 24px;
`


export const PopupActivateBtn = styled.div`
/* background-color: blue;
color: white;
border-radius: 8px;
padding: 10px;
display: inline-block; */

`


