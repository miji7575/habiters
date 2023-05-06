
import { DayBox, DayDateBox, CalenderDay, CalenderDate, HabitCheckBoxContainer, HabitCheckBox } from './Day.styles'
import CalenderDayHabitCheckbox from '../calender-day-habit-checkbox';

export default function CalenderDayUI(props) {






    return (
        // html 부분을 여기에 담아라
        <div>

            <DayBox 
             isSelected={props.isSelected}>
                <DayDateBox
                onClick={props.selected}>
                    <CalenderDay className="caption1-medium">{props.day}</CalenderDay>
                    <CalenderDate className="body1-bold">{props.date}</CalenderDate>
                </DayDateBox>

                {props.habits.map((habits,index) => <CalenderDayHabitCheckbox habitName={habits} index={index} habitsArr={props.habits}/>)}


                {/* <HabitCheckBoxContainer>
                    <HabitCheckBox />
                </HabitCheckBoxContainer> */}

            </DayBox>
        </div>
    )

}