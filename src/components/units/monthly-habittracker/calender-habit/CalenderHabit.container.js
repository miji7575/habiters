import { useEffect, useState } from "react"
import CalenderHabitUI from "./CalenderHabit.presenter"
import { useRecoilState } from "recoil"
import { userHabitState } from '../../../../components/stores';




export default function CalenderHabit(props) {



    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    useEffect(()=>{
        
    },[])
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