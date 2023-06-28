import { useEffect, useRef, useState } from "react";
import CalenderUI from "./Calender.presenter"
import { useRecoilState } from "recoil";
import { visibleDateState } from '../../../stores';



export default function Calender(props) {


    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    const currentDate = new Date().getDate()

    // 스크롤바 날짜에 맞게 옮길건데..
    const calender = useRef()



    const CalenderScroll = () => {

        if(currentDate > 9){
            calender.current.scrollTo({
                left: (currentDate - 9) * 44,
                behavior: "smooth",
            })
        }

    }

    useEffect(() => {
        CalenderScroll()
        // console.log(currentDate) ------- 렌더링 너무 많이됨 다시보기 <수정>
    })



    return (
        <CalenderUI
            selected={props.selected}
            selectedDate={props.selectedDate}


            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}
            HabitAlertPopupOn={props.HabitAlertPopupOn}
            visibleDate={visibleDate}
            habits={props.habits}

            getUserHabit={props.getUserHabit}

            calender={calender}
        />
    )

}