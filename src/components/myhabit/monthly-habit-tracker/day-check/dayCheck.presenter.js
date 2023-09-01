
import { TodayHabitCheckContainer, TodayHabitCheckTitle, TodayHabitCheckFilterTop, TodayHabitCheckFilterBottom, TodayHabitCheckContent, NoHabitImgBox, NoHabitImg, NoHabitContent } from './dayCheck.styles'
import HabitBox from './habit-box/HabitBox.container';



export default function DayCheckUI(props) {




    return (

        <>

            <TodayHabitCheckContainer>

                <TodayHabitCheckTitle>
                    일별 확인
                </TodayHabitCheckTitle>



                <TodayHabitCheckContent>
                    {Object.entries(props.habits).map(([key, value], index) => <HabitBox
                        key={index}
                        value={index}
                        name={value.content}
                        index={index}
                        habitChecks={value.habitChecks}
                        habitId={value.id}
                        visibleDate={props.visibleDate}
                        getUserHabit={props.getUserHabit}
                        date={props.date}

                    />)}


                    {/* 등록된 habit이 없을 때 이미지 */}
                    {props.isHabitNull &&
                        <NoHabitImgBox>
                            <NoHabitImg src="/image/img-no-content.svg" alt="일별확인없음" />
                            <NoHabitContent>
                                <div>아직 확인할 습관이 없어요!</div>
                                <div>습관을 만들어주세요.</div>
                                
                            </NoHabitContent>
                        </NoHabitImgBox>
                    }



                </TodayHabitCheckContent>
                {/* <TodayHabitCheckFilterTop /> */}
                {/* <TodayHabitCheckFilterBottom /> */}

            </TodayHabitCheckContainer>
        </>
    )

}