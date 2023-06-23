import { useRecoilState } from "recoil"
import DayCheckUI from "./List.presenter"
import { SelectedDate } from '../../../../components/stores';
import { useEffect } from "react";
import { userHabitState, userHabitStateThisMonth } from '../../../../components/stores';


export default function DayCheck(props) {
    const [habits, setHabits] = useRecoilState(userHabitState)
    const [habitsThisMonth, setHabitsThisMonth] = useRecoilState(userHabitStateThisMonth)
   
    useEffect(() => {
        props.getUserHabitThisMonth()

    },[habits])

   

    return (
        <DayCheckUI
            habits={habitsThisMonth}
            isHabitNull={props.isHabitNull}
            showDate={props.showDate}
            getUserHabit={props.getUserHabit}


        />
    )

}