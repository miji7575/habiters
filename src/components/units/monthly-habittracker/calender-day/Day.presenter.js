
import { DayBox, DayDateBox, CalenderDay, CalenderDate, HabitCheckBoxContainer, HabitCheckBox } from './Day.styles'
import CalenderDayHabitCheckbox from '../calender-day-habit-checkbox';

export default function CalenderDayUI(props) {






    return (
        // html 부분을 여기에 담아라
        <div>

            <DayBox
                isSelected={props.isSelected}>
                <DayDateBox
                    onClick={props.onClickDayHandler}>
                    <CalenderDay className="caption1-medium">{props.day}</CalenderDay>
                    <CalenderDate className="body1-bold">{props.date}</CalenderDate>
                </DayDateBox>


                {Object.entries(props.habits).map(([key, value], index) =>
                    <CalenderDayHabitCheckbox
                        habitId={value.id}
                        habitName={value.content}
                        habitChecks={value.habitChecks}
                        index={index} 
                       

                        showDate={props.showDate}
                        date={props.date}




                        getUserData={props.getUserData}
                        />)}


            </DayBox>
        </div>
    )

}