import styled from '@emotion/styled'
import { useState } from 'react'

// ===============================================  Style  =============================================
    const HabitTitleBox = styled.span`
    height: 44px;
    box-sizing: border-box;
    `
    const HabitTitle = styled.span`
        display: inline-block;
        width: 176px;
        height: 44px;
        text-align: center;
        line-height: 44px;
    `
    const HabitTitleManage = styled.div`
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-purple2);
    `
    const HabitUpdateBtn = styled.span`
    box-sizing: border-box;
    background-color: var(--color-white);
    background-repeat: no-repeat;
    cursor: pointer;
    `
    const HabitDeleteBtn = styled.span`
    box-sizing: border-box;
    background-color: var(--color-white);
    background-repeat: no-repeat;
    cursor: pointer;
    `

// ===============================================  Function  =============================================
export default function Habit(props) {



    const [ishabitTitleManageShow, setIsHabitTitleManageShow] = useState(false) //수정, 삭제 가능한 창 
    const [ishabitTitleShow, setIsHabitTitleShow] = useState(true) //습관 이름 보이는 창



    function HabitTitleManageShow() {
        setIsHabitTitleManageShow(true)
        setIsHabitTitleShow(false)
    }

    function HabitTitleShow() {
        setIsHabitTitleShow(true)
        setIsHabitTitleManageShow(false)
    }


    function updateHabitPopupOn(){
        props.updateHabitPopupOn(props.habitId, props.name)
        setIsHabitTitleShow(true)
        setIsHabitTitleManageShow(false)
    }

    function deleteHabitPopupOn(){
        props.deleteHabitPopupOn(props.habitId)
        console.log(props.habitId)
        setIsHabitTitleShow(true)
        setIsHabitTitleManageShow(false)
    }

    return (
        <HabitTitleBox >
            {ishabitTitleShow &&
                <HabitTitle className="body2-medium color-black2"
                    onMouseOver={HabitTitleManageShow} >
                    {props.name}
                </HabitTitle>}

            {ishabitTitleManageShow &&
                <HabitTitleManage
                    className="body2-medium color-black2"
                    onMouseLeave={HabitTitleShow}>

                    <HabitUpdateBtn className="icon-m icon-pencil-colored"
                        onClick={updateHabitPopupOn}></HabitUpdateBtn>
                    <HabitDeleteBtn className="icon-m icon-delete-colored"
                        onClick={deleteHabitPopupOn}
                        habitId={props.habitId}
                        ></HabitDeleteBtn>
                </HabitTitleManage>}
        </HabitTitleBox>

    )
}