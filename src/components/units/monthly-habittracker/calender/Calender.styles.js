import styled from '@emotion/styled'

// ---------해빗 트레커 캘린더부분
export const CalenderContainer = styled.div`

`
export const CalenderBox = styled.div`
     width: 880px;
    overflow-x: scroll;
    /* 스크롤바 여기에 달기 */
`

export const Calender = styled.div`
     display: inline-flex;
    padding-bottom: 24px;
    
    & > div:first-of-type span:first-of-type{
        border-top-left-radius: 8px;
    }
    & > div:first-of-type span:last-of-type {
        border-bottom-left-radius: 8px;
    }
    & > div:last-of-type span:first-of-type{
        border-top-right-radius: 8px;
    }
    & > div:last-of-type span:last-of-type{
        border-bottom-right-radius: 8px;
    }

`
