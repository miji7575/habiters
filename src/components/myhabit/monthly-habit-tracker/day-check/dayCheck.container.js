import { useRecoilState } from "recoil"
import DayCheckUI from "./dayCheck.presenter"
import { SelectedDate } from '../../../../components/stores';
import { useEffect } from "react";
import { userHabitState, userHabitStateThisMonth, visibleDateState } from '../../../../components/stores';


export default function DayCheck(props) {
    const [habits, setHabits] = useRecoilState(userHabitState)
    const [habitsThisMonth, setHabitsThisMonth] = useRecoilState(userHabitStateThisMonth)
    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
   
    useEffect(() => {
        props.getUserHabitThisMonth()

    },[habits])

   

    return (
        <DayCheckUI
            habits={habitsThisMonth}
            isHabitNull={props.isHabitNull}
            visibleDate={visibleDate}
            getUserHabit={props.getUserHabit}


        />
    )

}