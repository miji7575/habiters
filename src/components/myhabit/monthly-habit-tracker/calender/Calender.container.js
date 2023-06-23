import { useEffect, useRef, useState } from "react";
import CalenderUI from "./Calender.presenter"
import { useRecoilState } from "recoil";
import {visibleDateState} from '../../../stores';



export default function Calender(props) {


    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)

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
            visibleDate={visibleDate}
            habits={props.habits}

            getUserHabit={props.getUserHabit}

            calender={calender}
        />
    )

}