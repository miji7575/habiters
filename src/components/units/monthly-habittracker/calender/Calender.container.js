import { useEffect, useRef, useState } from "react";
import CalenderUI from "./Calender.presenter"




export default function Calender(props) {

    // 스크롤바 날짜에 맞게 옮길건데..
    const calender = useRef()



    const CalenderScroll = () => {

        // calender.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        calender.current.scrollTo(43*24,0);
    }

    useEffect(() => {
        CalenderScroll()
        
        // window.scrollTo(200,0)
    }, [])



    return (
        <CalenderUI
            selected={props.selected}
            selectedDate={props.selectedDate}


            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}
            HabitAlertPopupOn={props.HabitAlertPopupOn}
            showDate={props.showDate}
            habits={props.habits}

            getUserHabit={props.getUserHabit}

            calender={calender}
        />
    )

}