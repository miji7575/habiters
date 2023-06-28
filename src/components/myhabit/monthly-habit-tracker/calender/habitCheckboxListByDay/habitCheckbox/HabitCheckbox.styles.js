import styled from '@emotion/styled'


// ============================== Style ==============================
export const HabitCheckBoxContainer = styled.span`
height: 44px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;

/* 마지막 체크박스 컨테이너 */
&:last-of-type{
    border-bottom: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'};  
}
`
export const HabitCheckBox = styled.span`
width: 24px;
height: 24px;
border-radius: 4px;
background-color: ${(props) => props.isCheckboxChecked === true ? props.colorArray[(props.index) % 3] : `var(--color-black9)`};
cursor: pointer;
`