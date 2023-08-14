import styled from '@emotion/styled'


export const FooterWrap = styled.div`


    background-color: var(--color-black10);

    display: flex;
    justify-content: center;
    height: 204px;
    width: 100%;
    box-sizing: border-box; 
    bottom: 0;
    `
export const FooterContent = styled.div`
    width: 1180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 48px 0;

`

export const FooterLogo = styled.img`
    width: 212px;
    height: 24px;
    src: url("/image/logo-habiters.svg");
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