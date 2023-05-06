import { useState } from "react"
import MyHabitToggleUI from "./Toggle.presenter"



export default function MyHabitToggle(props) {

    const [monthlyHabitTrackerChecked , setMonthlyHabitTrackerChecked] = useState(true)
    const [monthlyRetrospectsChecked , setMonthlyRetrospectsChecked] = useState(false)


    // 로직을 여기다 담아라
    function MonthlyHabitTrackerOn(){
        props.MonthlyHabitTrackerOn()
        setMonthlyHabitTrackerChecked(true)
        setMonthlyRetrospectsChecked(false)
    }

    function MonthlyRetrospectsOn(){
        props.MonthlyRetrospectsOn()
        setMonthlyHabitTrackerChecked(false)
        setMonthlyRetrospectsChecked(true)

    }
   



    return (
        <MyHabitToggleUI 
        monthlyHabitTrackerChecked={monthlyHabitTrackerChecked}
        monthlyRetrospectsChecked={monthlyRetrospectsChecked}
        MonthlyHabitTrackerOn={MonthlyHabitTrackerOn}
        MonthlyRetrospectsOn={MonthlyRetrospectsOn}
        />
    )

}