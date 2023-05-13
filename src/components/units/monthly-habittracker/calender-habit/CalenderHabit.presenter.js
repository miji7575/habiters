
import { HabitListBox, HabitListTitle } from './CalenderHabit.styles'
import Habits from './habit';


export default function CalenderHabitUI(props) {







    return (
        // html 부분을 여기에 담아라
        <div>

            <HabitListBox>
                <HabitListTitle className="body1-bold">내 습관 목록</HabitListTitle>

                {Object.entries(props.habits).map(([key,value]) => 
                <Habits 
                  updateHabitPopupOn={props.updateHabitPopupOn}
                  deleteHabitPopupOn={props.deleteHabitPopupOn}
                  name={value.content}
                  habitId={value.id}/>)}



            </HabitListBox>
        </div>
    )

}