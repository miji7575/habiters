import { useState } from "react"
import CalenderHabitUI from "./CalenderHabit.presenter"




export default function CalenderHabit(props) {






    return (
        <CalenderHabitUI
          

            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}

            habits={props.habits}
        />
    )

}