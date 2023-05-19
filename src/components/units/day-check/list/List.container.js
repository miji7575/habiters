import { useRecoilState } from "recoil"
import DayCheckUI from "./List.presenter"
import {SelectedDate} from '../../../../commons/stores/Stores';


export default function DayCheck(props) {

    // 로직을 여기다 담아라
   
    


    return (
        <DayCheckUI 
        habits={props.habits}
        isHabitNull={props.isHabitNull}
        showDate={props.showDate}
        getUserHabit={props.getUserHabit}
        />
    )

}