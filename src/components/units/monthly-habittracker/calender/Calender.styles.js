import styled from '@emotion/styled'

// ---------해빗 트레커 캘린더부분
export const CalenderContainer = styled.div`

`
export const CalenderBox = styled.div`
     width: 880px;
     /* overflow-x: scroll; */
     position: relative;
    /* 스크롤바 여기에 달기 */
`

export const Calender = styled.div`
    
     display: inline-flex;
     padding-bottom: 24px;
    // ----- 습관-내습관목록
    & > div:first-of-type>span:first-of-type{   
        border-top-left-radius: 8px;
        border: 1px solid var(--color-black8);}
    //습관-마지막습관
    & > div:first-of-type>span:last-of-type{    
        border-bottom-left-radius: 8px; }
    //습관-마우스오버(관리창)
    & > div:first-of-type>span:last-of-type>div:last-of-type{   
        border-bottom-left-radius: 8px; }
    //습관-전체
    & > div:first-of-type>span{ 
        border-left: 1px solid var(--color-black8);
        border-bottom: 1px solid var(--color-black8);
        border-right: 1px solid var(--color-black8);
    }


   
    
    // ----- 날짜 - 세로줄전체 - 마지막줄
    & > div:nth-of-type(2) > div:last-of-type > div{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    /* 마지막날의 마지막습관 */
    & > div:nth-of-type(2) > div:last-of-type > div  span:last-of-type{
        border-bottom-right-radius: 8px;
    }

     // 날짜 - 세로줄마지막(말일) - 날짜박스
    & > div:nth-of-type(2) > div:last-of-type  > div> span:first-of-type{
        border-top-right-radius: 6px;
    }
   
   
`

export const CalenderDaysContainer = styled.div`

    width: 704px;
    overflow-x: scroll;
    display: flex;
    padding-bottom: 24px; 

    &::-webkit-scrollbar{
    height: 4px;
    }
    ::-webkit-scrollbar-thumb{
    width: 30%;/* 스크롤바의 길이 */
    background: var(--color-black1); /* 스크롤바의 색상 */
    border-radius: 2px;
    }
    ::-webkit-scrollbar-track{
    background-color: var(--color-black8);
    border-radius: 2px;
    }

    ::-webkit-scrollbar-button{
        display: none;
        background-color: red;  
    }
    
`