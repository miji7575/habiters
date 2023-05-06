import styled from '@emotion/styled'


export const DayBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 44px;
    box-sizing: border-box; 
    &>span{
        /* border-top: 1px solid var(--color-black2); */
        /* border-right: ${(props) => props.isSelected === true ? '1px solid var(--color-black2)': '1px solid var(--color-black8)'}; */
        /* border-bottom: 1px solid var(--color-black2); */
    }
`

export const DayDateBox = styled.span`
    height: 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--color-black8);
    border-right: 1px solid var(--color-black8);
    border-bottom: 1px solid var(--color-black8);
    cursor: pointer;
`

export const CalenderDay = styled.span`
`
export const CalenderDate = styled.span`
`


