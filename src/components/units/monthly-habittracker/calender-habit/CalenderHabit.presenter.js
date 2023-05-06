
import { HabitListBox, HabitListTitle } from './CalenderHabit.styles'
import Habits from './habit';


export default function CalenderHabitUI(props) {







    return (
        // html 부분을 여기에 담아라
        <div>

            <HabitListBox>
                <HabitListTitle className="body1-bold">내 습관 목록</HabitListTitle>

                {props.habits.map((habits) => <Habits 
                  updateHabitPopupOn={props.updateHabitPopupOn}
                  deleteHabitPopupOn={props.deleteHabitPopupOn}
                  name={habits}/>)}



            </HabitListBox>
        </div>
    )

}