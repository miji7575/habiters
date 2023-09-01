import styled from '@emotion/styled'


export const HeaderWrap = styled.header`
    height: var(--header-height);
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--color-black7);
    box-sizing: border-box;
    & > div{
        height: inherit;
    }
    `
export const HeaderContent = styled.div`
    width: 1180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    & > div{
        height: inherit;
    }   

        /* body1-medium */
    font-family: 'Pretendard-Medium'; 
    font-size: 18px;
    line-height: 26px;
`

export const LogoBox = styled.div`
    box-sizing: border-box;
`

export const MainLogo = styled.img`
    width: 212px;
    height: 24px;
    padding: 33px 0px 33px 0;
    cursor: pointer;
    object-fit: contain;
`

export const HeaderMenuBox = styled.div`
    display: flex;
    gap: 40px;
`
export const HeaderMypageBox = styled.div`
    display: flex;
`



// export const HeaderMenu = styled.div`
//     display: block;
//     color: var(--color-black1);
//     cursor: pointer;
//     line-height: var(--header-height);
//     position: relative;
//     &::before{
//     content: '';
//     background-color: var(--color-purple2);
//     width: max-content;
//     height: 4px;
//     width: 0;
//     ${(props)=> props.isMyHabitClicked === true ? `width: 100%;` : `width: 0;`}
//     /* ${(props)=> props.isHabitimunityClicked === true ? `width: 100%;` : `width: 0;`}
//     ${(props)=> props.isMyPageClicked === true ? `width: 100%;` : `width: 0;`} */
//     position: absolute;
//     bottom: 0;
//     transition: .3s;
//     }
//     &:hover::before{
//         width: 100%;
//     }
   

   
// `
