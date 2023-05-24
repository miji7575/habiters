
import { CalenderContainer, CalenderBox, Calender, CalenderDaysContainer } from './Calender.styles'
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


                        <CalenderDaysContainer
                        ref={props.calender}>
                            {props.showDate.showDays.map((day, index) => <CalenderDay
                                selected={props.selected}
                                selectedDate={props.selectedDate}
                                
                                habits={props.habits}
                                day={day}
                                date={index + 1}



                                showDate={props.showDate}

                            
                                


                                getUserHabit={props.getUserHabit}
                            />)}
                        </CalenderDaysContainer>





                    </Calender>
                </CalenderBox>
            </CalenderContainer>
        </div>
    )

}