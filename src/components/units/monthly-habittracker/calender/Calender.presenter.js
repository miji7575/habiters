
import { CalenderContainer, CalenderBox, Calender, } from './Calender.styles'
import CalenderHabit from '../calender-habit/CalenderHabit.container';
import CalenderDay from '../calender-day/Day.container';


export default function CalenderUI(props) {








    return (
        // html 부분을 여기에 담아라
        <div>

            <CalenderContainer>
                <CalenderBox className=" calender-box-scrollbar">
                    <Calender>



                        <CalenderHabit
                            habits={props.habits}
                            updateHabitPopupOn={props.updateHabitPopupOn}
                            deleteHabitPopupOn={props.deleteHabitPopupOn}
                        />

                        {props.showDate.showDays.map((day, index) => <CalenderDay
                            selected={props.selected}
                            isSelected={props.isSelected}
                            habits={props.habits}
                            day={day}
                            date={index + 1}
                        />)}





                    </Calender>
                </CalenderBox>
            </CalenderContainer>
        </div>
    )

}