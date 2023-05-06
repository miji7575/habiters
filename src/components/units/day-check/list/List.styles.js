import styled from '@emotion/styled'


// ---오늘의 회고 박스------
export const TodayHabitCheckContainer = styled.div`
    width: 280px;
    height: 508px;
    box-sizing: border-box;
    position: relative;
    border-radius: 8px;
    border: 1px solid var(--color-black7);
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
`

export const TodayHabitCheckTitle = styled.div`
    height: 68px;
    padding-left: 20px;
    padding-top: 24px;
    padding-bottom: 16px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
`

export const TodayHabitCheckFilterTop = styled.div`
 position: absolute;
    width: 278px;
    height: 100px;
    top: 68px;
    left: 0px;
    box-sizing: border-box;
    background: linear-gradient(var(--color-white), #ffffff00);
`

export const TodayHabitCheckFilterBottom = styled.div`
 position: absolute;
    width: 278px;
    height: 100px;
    background: linear-gradient( #ffffff00,var(--color-white));
    bottom: 0px;
    left: 0px;
    border-radius: 0 0 8px 8px;
`

export const TodayHabitCheckContent = styled.div`
    position: absolute;
    top: 68px;


    width: 278px;
    height: 438px;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 16px;
    overflow-y: scroll; 
    overflow-x: hidden;
    scrollbar-width: none;  
    &::-webkit-scrollbar{
    width: 8px;
    }
    ::-webkit-scrollbar-thumb{
    height: 30%; /* 스크롤바의 길이 */
    background: var(--color-black7); /* 스크롤바의 색상 */
    border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
    background: transparent;
    }
    /* .img-no-retrospect{
    width: 148px;
    height: 110px;
    } */

    

`
