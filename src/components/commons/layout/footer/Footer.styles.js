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



export const FooterDetail = styled.div`
    display: flex;
    align-items: center;
    gap : 12px;
`

export const Bar = styled.span`
    /* padding: 12px 0; */
    display: inline-block;
    width: 1px; 
    height: 10px; 
    background-color : var(--color-black5);
`