
import { TodayHabitCheckContainer, TodayHabitCheckTitle, TodayHabitCheckFilterTop, TodayHabitCheckFilterBottom, TodayHabitCheckContent, NoHabitImgBox, NoHabitImg, NoHabitContent } from './dayCheck.styles'
import HabitBox from './list/habit-box/HabitBox.container';
;


export default function DayCheckUI(props) {




    return (
        // html 부분을 여기에 담아라
        <>

            <TodayHabitCheckContainer>

                <TodayHabitCheckTitle className="headline5">
                    일별 확인
                </TodayHabitCheckTitle>



                <TodayHabitCheckContent>
                    {Object.entries(props.habits).map(([key, value], index) => <HabitBox
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
                            <NoHabitContent className='body3-regular'>
                                <div>아직 작성된 회고가 없네요!</div>
                                <div>회고를 작성해주세요.</div>
                                
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