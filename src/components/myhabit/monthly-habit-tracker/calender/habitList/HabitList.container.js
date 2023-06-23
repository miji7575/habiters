import { useEffect, useState } from "react"
import HabitListUI from "./HabitList.presenter"
import { useRecoilState } from "recoil"
import { userHabitState } from '../../../../../components/stores';




export default function HabitList(props) {



    const [userHabit, setUserHabit] = useRecoilState(userHabitState)
    useEffect(()=>{
        
    },[])
    // let habitList = userHabit
    // console.log(habitList)

    return (
        <HabitListUI


            updateHabitPopupOn={props.updateHabitPopupOn}
            deleteHabitPopupOn={props.deleteHabitPopupOn}

            habits={userHabit}
        />
    )

}