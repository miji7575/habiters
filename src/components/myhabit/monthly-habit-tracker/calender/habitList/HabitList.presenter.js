
import { HabitListBox, HabitListTitle } from './HabitList.styles'
import Habits from './habit';


export default function HabitListUI(props) {







    return (
        // html 부분을 여기에 담아라

        <>
            <HabitListBox>
                <HabitListTitle>내 습관 목록</HabitListTitle>

                {Object.entries(props.habits).map(([key, value],index) =>
                    <Habits
                        key={index}
                        value={index}
                        updateHabitPopupOn={props.updateHabitPopupOn}
                        deleteHabitPopupOn={props.deleteHabitPopupOn}
                        name={value.content}
                        habitId={value.id} />)}



            </HabitListBox>
        </>
    )

}