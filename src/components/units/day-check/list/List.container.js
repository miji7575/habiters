import { useRecoilState } from "recoil"
import DayCheckUI from "./List.presenter"
import { SelectedDate } from '../../../../components/stores';
import { useEffect } from "react";
import { userHabitState } from '../../../../components/stores';


export default function DayCheck(props) {
    const [habits, setHabits] = useRecoilState(userHabitState)
    useEffect(() => {
        props.getUserHabit()
    }, [])


    return (
        <DayCheckUI
            habits={habits}
            isHabitNull={props.isHabitNull}
            showDate={props.showDate}
            getUserHabit={props.getUserHabit}


        />
    )

}