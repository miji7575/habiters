import styled from '@emotion/styled'


// 일별 확인 안에 알맹이들


export const HabitCheck = styled.div`
    width: 240px;
    height: 112px;
    box-sizing: border-box;
    padding: 20px 24px 20px 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props)=>props.colorArray[(props.index%3)]};
    
`

export const HabitCheckPurPle = styled(HabitCheck)`
    background-color: var(--color-purple4);
`
export const HabitCheckBlue = styled(HabitCheck)`
    background-color: var(--color-skyblue4);
`
export const HabitCheckGreen = styled(HabitCheck)`
    background-color: var(--color-green4);
`
export const HabitCheckBtn = styled.div`
    width: 192px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    color: var(--color-white);
    /* background-color: ${(props)=>props.btnColorArray[(props.index%3)]}; */
    background-color: ${ (props) => props.isHabitChecked === true ? 'var(--color-white)' : props.btnColorArray[(props.index%3)]} ;
    border: ${ (props) => props.isHabitChecked === true ?  `1px solid ${props.btnColorArray[(props.index%3)]}` : 'none'} ;
    color: ${ (props) => props.isHabitChecked === true ? props.btnColorArray[(props.index%3)] : 'var(--color-white)'} ;

    /* .body3-medium{ */
    font-family: 'Pretendard-Medium'; 
    font-size: 14px;
    
`

export const HabitCheckBtnPurple = styled(HabitCheckBtn)`
    background-color: var(--color-purple2);
`
export const HabitCheckBtnBlue = styled(HabitCheckBtn)`
    background-color: var(--color-skyblue2);
`
export const HabitCheckBtnGreen = styled(HabitCheckBtn)`
    background-color: var(--color-green2);
`


export const HabitTitle = styled.div`
padding-bottom: 16px;
color : var(--color-black2);


/* .body2-bold{ */
  font-family: 'Pretendard-Bold'; 
  font-size: 16px;
  line-height: 24px;
`