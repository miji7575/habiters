import { useState } from "react"
import CalenderDayUI from "./Day.presenter"



export default function CalenderDay(props) {






    return (


        <CalenderDayUI
            isSelected={props.isSelected}
            selected={props.selected}
            habits={props.habits}
            day={props.day}
            date={props.date} />


    )

}