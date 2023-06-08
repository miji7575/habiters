import styled from '@emotion/styled'


export const FooterWrap = styled.div`


    background-color: var(--color-black10);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 204px;
    width: 100%;
    box-sizing: border-box;
    padding: 48px 0 48px 19%;
    /* position: absolute; */
    bottom: 0;
    `




export const FooterDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    & a{
        text-decoration: none;
        cursor: pointer;
    }
    & a:link,a:visited,a:hover,a:active{
        color:inherit
    }
`
export const HeaderMypageBox = styled.div`
    display: flex;
`
export const HeaderMenu = styled.div`
    display: block;
    color: var(--color-black1);
    cursor: pointer;
    line-height: var(--header-height);
    position: relative;
    &::before{
        content: '';
    background-color: var(--color-purple2);
    width: max-content;
    height: 4px;
    width: 0;
    position: absolute;
    bottom: 0;
    transition: .3s;
    }
    &:hover::before{
        width: 100%;
    }
`
