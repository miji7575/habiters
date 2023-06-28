
import { MonthlyHabitTrackerContainer, HabitTrackerHeader, AddHabitBtn, MoveTodayBtn } from './MonthlyHabit.styles'

import YearDateBox from '../../units/year-date-box/YearDateBox.container';
import TodayHabitCheck from './day-check/dayCheck.container';
import Calender from './calender/Calender.container';


export default function MonthlyHabitTrackerUI(props) {






    return (
        // html 부분을 여기에 담아라
        <div>

            <MonthlyHabitTrackerContainer>

                <HabitTrackerHeader>
                    <YearDateBox/>


                    <AddHabitBtn className="body3-medium btn btn-medium btn-primary-default btn-width-fit-content "
                        onClick={props.addNewHabitPopupOn}>
                        <span className="icon-s icon-add-colored btn-inner-icon-white"></span>
                        <span>새로운 습관 만들기</span>
                    </AddHabitBtn>

                    <MoveTodayBtn className="body3-medium btn btn-medium btn-secondary-default btn-width-fit-content "
                        onClick={props.moveToThisMonth}>
                        <span>오늘</span>
                    </MoveTodayBtn>
                </HabitTrackerHeader>



                {/* <!-- ---  일별확인  ---  --> */}
                <TodayHabitCheck
                    isHabitNull={props.isHabitNull}
                    getUserHabit={props.getUserHabit}
                />




                {/*해빗트래커 컨텐츠 박스 */}
                <Calender
                    updateHabitPopupOn={props.updateHabitPopupOn}
                    deleteHabitPopupOn={props.deleteHabitPopupOn}
                    HabitAlertPopupOn={props.HabitAlertPopupOn}

                    habits={props.habits}
                    selectedDate={props.selectedDate}
                    getUserHabit={props.getUserHabit}
                />



            </MonthlyHabitTrackerContainer>
        </div>
    )

}