import { useState } from "react";
import CalenderUI from "./Calender.presenter"




export default function Calender(props) {

    const [isSelected, setIsSelected] = useState(false);
    const selected = () => {
        setIsSelected(true)
        console.log(isSelected)
    }




    return (
        <CalenderUI
            selected={selected}
            isSelected={isSelected}
            
            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}
            showDate={props.showDate}
            habits={props.habits}
        />
    )

}