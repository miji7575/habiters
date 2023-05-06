import styled from '@emotion/styled'
import { useEffect, useState } from 'react'




export default function CalenderDayHabitCheckbox(props) {

    const HabitCheckBoxContainer = styled.span`
    height: 44px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--color-black8);
    border-bottom: 1px solid var(--color-black8);
    &:last-child{
        border-bottom: 1px solid var(--color-black8);
    }
    `
    const HabitCheckBox = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: ${(props) => props.isCheckboxChecked === true ? props.colorArray[(props.index) % 3] : `var(--color-black9)`};
    cursor: pointer;
    `


    // 함수
    useEffect(() => {
      
    }, [isCheckboxChecked])

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    function checkboxCheck() {
        setIsCheckboxChecked(!isCheckboxChecked)
    }


    const colorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']




    return (
        <HabitCheckBoxContainer>
            <HabitCheckBox
                onClick={checkboxCheck}
                isCheckboxChecked={isCheckboxChecked}
                colorArray={colorArray}
                index={props.index}
            />
        </HabitCheckBoxContainer>

    )
}