import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react';


const moveLeft = keyframes`
from, 20%, 40%, 60%, 80%, 100%,to {
    transform: translate3d(0,0,0);
}
10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-4px,0,0);
}
`

const moveRight = keyframes`

from, 20%, 40%, 60%, 80%, 100%,to {
    /* transform: translateX(0px); */
    transform: translate3d(0,0,0);
}
10%, 30%, 50%, 70%, 90% {
    transform: translate3d(4px,0,0);
}
`

export const DateBox = styled.div`
    display: inline-flex;
    align-items: center;
    color: var(--color-black1); 
    gap : 4px;

`

export const ArrowLeft = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-left.svg) no-repeat;
    cursor: pointer;
    /* padding: 0 4px; */
    &:hover{
        /* position: relative;
        right: 4px; */
        animation: ${moveLeft} 1.5s linear infinite;
    }
    `

export const ArrowRight = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-right.svg) no-repeat;
    cursor: pointer;
    /* padding: 0 4px; */
    &:hover{
        animation: ${moveRight} 1.5s linear infinite;
    }
    `

export const Date = styled.span`
    width:98px;
    /* .headline4 */
    font-family: 'Pretendard-Bold'; 
    font-size: 24px;
    line-height: 32px;
    `


export const BtnContainer = styled.div`
 position: absolute;
 display: flex;
 gap: 8px;
 right: 10px;

`


export const AddHabitBtn = styled.div`
 /* width: 156px; */
    /* position: absolute;
    width: 156px;
    right: 0;
    padding: 0; */
`

export const MoveTodayBtn = styled.div`
margin-right: 156px;
    /* position: absolute;
    width: 57px;
    right: 168px;
    padding: 0; */
`