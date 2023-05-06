import styled from '@emotion/styled'



export const HabitListBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 176px;
    box-sizing: border-box;
    & > span{
        text-align: center;
        box-sizing: border-box;
        border-left: 1px solid var(--color-black8);
        border-right: 1px solid var(--color-black8);
        border-bottom: 1px solid var(--color-black8);
    }

   
    `


export const HabitListTitle = styled.span`
        border-top: 1px solid var(--color-black8);
        height: 60px;
        line-height: 60px;  
    
    `


