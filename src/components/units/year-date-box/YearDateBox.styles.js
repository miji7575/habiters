import styled from '@emotion/styled'

export const DateBox = styled.div`
    display: inline-flex;
    align-items: center;
    color: #000000; 

`

export const ArrowLeft = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-left.svg) no-repeat;
    cursor: pointer;
    padding: 0 4px;
    &:hover{
        position: relative;
        right: 4px;
    }
    `

export const ArrowRight = styled.span`
    width: 32px;
    height: 32px;
    background: url(/image/icon/icon-arrow-left.svg) no-repeat;
    cursor: pointer;
    padding: 0 4px;
    transform: rotate(180deg);
    &:hover{
        position: relative;
        left: 4px;
    }
    `