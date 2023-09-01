
import { DayBox, DayDateBox, CalenderDay, CalenderDate, DayContainer, HabitCheckBox } from './Day.styles'
import CalenderDayHabitCheckbox from './habitCheckbox';

export default function CalenderDayUI(props) {






    return (
        // html 부분을 여기에 담아라
        <DayContainer
            isSelected={props.isSelected}
            ref={props.ref}>

            <DayBox
                isSelected={props.isSelected}>
                <DayDateBox
                    onClick={props.onClickDayHandler}>
                    <CalenderDay>{props.day}</CalenderDay>
                    <CalenderDate>{props.date}</CalenderDate>
                </DayDateBox>


                {Object.entries(props.habits).map(([key, value], index) =>
                    <CalenderDayHabitCheckbox
                        key={index}
                        value={index}
                        HabitAlertPopupOn={props.HabitAlertPopupOn}
                        habitId={value.id}
                        habitName={value.content}
                        habitChecks={value.habitChecks}
                        index={index}
                        isSelected={props.isSelected}

                        visibleDate={props.visibleDate}
                        date={props.date}




                        getUserHabit={props.getUserHabit}
                    />)}


            </DayBox>
        </DayContainer>
    )

}