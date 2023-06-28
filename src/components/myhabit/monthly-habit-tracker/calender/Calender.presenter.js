
import { CalenderContainer, CalenderBox, Calender, CalenderDaysContainer } from './Calender.styles'
import CalenderHabit from './habitList/HabitList.container';
import CalenderDay from './habitCheckboxListByDay/Day.container';


export default function CalenderUI(props) {








    return (
        // html 부분을 여기에 담아라
        <div>

            <CalenderContainer>
                <CalenderBox className=" calender-box-scrollbar">
                    <Calender>



                        <CalenderHabit
                            updateHabitPopupOn={props.updateHabitPopupOn}
                            deleteHabitPopupOn={props.deleteHabitPopupOn}
                        />


                        <CalenderDaysContainer
                            ref={props.calender}>
                            {props.visibleDate.days.map((day, index) => <CalenderDay
                                key={index}
                                value={index}
                                HabitAlertPopupOn={props.HabitAlertPopupOn}
                                selected={props.selected}
                                selectedDate={props.selectedDate}

                                habits={props.habits}
                                day={day}
                                date={index + 1}



                                // showDate={props.showDate}





                                getUserHabit={props.getUserHabit}
                            />)}
                        </CalenderDaysContainer>





                    </Calender>
                </CalenderBox>
            </CalenderContainer>
        </div>
    )

}