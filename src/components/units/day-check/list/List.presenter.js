
import { TodayHabitCheckContainer, TodayHabitCheckTitle, TodayHabitCheckFilterTop, TodayHabitCheckFilterBottom, TodayHabitCheckContent, NoRetrospectImg, NoRetrospectImgBox } from './List.styles'
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
                    {Object.entries(props.habits).map(([key, value], index) => <HabitBox
                        name={value.content}
                        index={index}
                        habitChecks={value.habitChecks}
                        habitId={value.id}
                        showDate={props.showDate}

                    />)}

                    {props.isHabitNull &&
                        <NoRetrospectImgBox>
                            <NoRetrospectImg class="img-no-retrospect" src="/image/img-no-retrospect.svg" alt="일별확인없음" />
                        </NoRetrospectImgBox>
                    }



                </TodayHabitCheckContent>

                {/* <TodayHabitCheckFilterBottom /> */}

            </TodayHabitCheckContainer>
        </>
    )

}