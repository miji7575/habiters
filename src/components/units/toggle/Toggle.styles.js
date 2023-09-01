import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react';




export const ToggleContainer = styled.div`
padding-bottom: 64px;
`


export const ToggleBox = styled.div`
    width: var(--tab-width);
    height: var(--tab-height);
    box-sizing: border-box;

    border-radius: calc(var(--tab-height) / 2);
    border: 1px solid var(--color-black7);

    display: flex;
    align-items: center;
    justify-content: center;
    color : var(--color-black4);
    position: relative;


    /* headline5 */
  font-family: 'Pretendard-Bold'; 
  font-size: 20px;
  line-height: 28px;

`

export const ToggleBtn = styled.div`

    

    width: calc((var(--tab-width) / 2) - 10px );
    height: calc(var(--tab-height) - 12px);
    text-align: center;
    line-height: calc(var(--tab-height) - 12px);
    

    ${(props) => props.monthlyHabitTrackerChecked === true ? `color : var(--color-white);` : `none`};
    ${(props) => props.monthlyRetrospectsChecked === true ? `color : var(--color-white);` : `none`};
  
    
`





const bounce = keyframes`
from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
}

40%, 43% {
    transform: translate3d(0, -20px, 0);
}

70% {
    transform: translate3d(0, -15px, 0);
}

90% {
    transform: translate3d(0,-4px,0);
}
`




export const Test = styled.div`


    width: calc((var(--tab-width) / 2) - 10px );
    height: calc(var(--tab-height) - 12px);
    border-radius: calc(var(--tab-height) / 2);
    background-color: var(--color-purple2);
    z-index: -1;
    position: absolute;


  
    ${(props) => props.monthlyHabitTrackerChecked === true ? `left : 10px; ` : ``}; 
    ${(props) => props.monthlyRetrospectsChecked === true ? `right : 10px; ` : ``};
    
    /* transition: left .5s; */
    

   

`


