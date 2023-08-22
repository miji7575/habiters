import styled from '@emotion/styled'


export const IconGroup = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(/image/icon/icon-more.svg);

    position: absolute;
    top:20px;
    right: 24px;
    cursor: pointer;
`

export const ActionListWrap = styled.div`

    position: absolute;
    top : 80px;
    right: -4px;
    z-index: 998;
    
    border-radius: 8px;
    background-color: var(--color-white);
    border: 1px solid var(--color-black7);
    box-sizing: border-box;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.06);


`

export const ActionListOptions = styled.div`
    width: 80px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color : var(--color-black2);
    font-family: 'Pretendard-Regular'; 
    font-size: 18px;
   
    :hover{
        color:var(--color-purple2);
    }

`
