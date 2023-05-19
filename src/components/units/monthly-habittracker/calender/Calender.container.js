import { useEffect, useRef, useState } from "react";
import CalenderUI from "./Calender.presenter"




export default function Calender(props) {





    return (
        <CalenderUI
            selected={props.selected}
            selectedDate={props.selectedDate}


            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}
            showDate={props.showDate}
            habits={props.habits}
           



            getUserHabit={props.getUserHabit}
        />
    )

}