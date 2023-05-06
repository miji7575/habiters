import styled from '@emotion/styled'
import { useState } from 'react'

export default function Habit(props) {

     const HabitTitleBox = styled.span`
       width: 176px;
        height: 44px;
        box-sizing: border-box;

    `


 const HabitTitle = styled.span`
        display: inline-block;
        width: 176px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        background-color: var(--color-white);
        box-sizing: border-box;
        border-bottom: 1px solid var(--color-black8);
        border-right: 1px solid var(--color-black8);
        

`

 const HabitTitleManage = styled.div`
  box-sizing: border-box;
    height: 44px;
    text-align: center;
    line-height: 44px;
    z-index: -999;

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

    const [ishabitTitleManageShow, setIsHabitTitleManageShow] = useState(false)
    const [ishabitTitleShow, setIsHabitTitleShow] = useState(true)




    // 로직을 여기다 담아라
    function HabitTitleManageShow(e) {
        setIsHabitTitleManageShow(true)
        setIsHabitTitleShow(false)
    }

    function HabitTitleShow(e) {
        setIsHabitTitleShow(true)
        setIsHabitTitleManageShow(false)
    }


    function updateHabitPopupOn(){
        props.updateHabitPopupOn()
        setIsHabitTitleShow(true)
        setIsHabitTitleManageShow(false)
    }

    function deleteHabitPopupOn(){
        props.deleteHabitPopupOn()
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
                    onMouseOut={HabitTitleShow}>

                    <HabitUpdateBtn className="icon-m icon-pencil-colored"
                        onClick={updateHabitPopupOn}></HabitUpdateBtn>
                    <HabitDeleteBtn className="icon-m icon-delete-colored"
                        onClick={deleteHabitPopupOn}></HabitDeleteBtn>
                </HabitTitleManage>}
        </HabitTitleBox>

    )
}