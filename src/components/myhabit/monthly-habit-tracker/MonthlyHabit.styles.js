import styled from '@emotion/styled'




export const MonthlyHabitTrackerContainer = styled.div`
    /* display: none; */
    display: grid;
    grid-template-columns: 880px 280px;
    grid-template-rows: 32px 1fr;
    column-gap: 20px;
    row-gap: 24px;
    justify-items: center;
`
export const HabitTrackerHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    display: inline-flex;
    width: 880px;
    position: relative;
    justify-content: center;
`
export const BtnContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 8px;
    right: 0px;

`


export const AddHabitBtn = styled.div`
    /* position: absolute;
    width: 156px;
    right: 0;
    padding: 0; */
`

export const MoveTodayBtn = styled.div`
    /* position: absolute;
    width: 57px;
    right: 168px;
    padding: 0; */
`