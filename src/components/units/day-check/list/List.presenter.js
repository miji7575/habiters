
import { TodayHabitCheckContainer, TodayHabitCheckTitle, TodayHabitCheckFilterTop, TodayHabitCheckFilterBottom ,TodayHabitCheckContent } from './List.styles'
import HabitBox from '../habit-box/HabitBox.container';
import { HabitListBox } from '../../monthly-habittracker/calender-habit/CalenderHabit.styles';


export default function DayCheckUI(props) {




    return (
        // html 부분을 여기에 담아라
        <>

            <TodayHabitCheckContainer>

                <TodayHabitCheckTitle className="headline5">
                    일별 확인
                </TodayHabitCheckTitle>

                {/* <TodayHabitCheckFilterTop /> */}

                <TodayHabitCheckContent>

                    {props.habits.map((habits,index) =>
                    <HabitBox 
                    name={habits}
                    index={index}
                    />)}
                    {/* <HabitBox />
                    <HabitBox />
                    <HabitBox />
                    <HabitBox />
                    <HabitBox />
                    <HabitBox />
                    <HabitBox />
                    <HabitBox /> */}



                </TodayHabitCheckContent>

                {/* <TodayHabitCheckFilterBottom /> */}

            </TodayHabitCheckContainer>
        </>
    )

}