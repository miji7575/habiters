import { useState } from "react"
import CalenderHabitUI from "./CalenderHabit.presenter"
import { useRecoilState } from "recoil"
import { userHabitState } from '../../../../commons/stores/Stores';




export default function CalenderHabit(props) {



    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    // let habitList = userHabit
    // console.log(habitList)

    return (
        <CalenderHabitUI


            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}

            habits={userHabit}
        />
    )

}