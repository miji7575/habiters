
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
                    <YearDateBox
                        // showDate={props.showDate}
                        monthDown={props.monthDown}
                        monthUp={props.monthUp}
                        getUserHabit={props.getUserHabit}
                    />
              

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
                    habits={props.habits}
                    isHabitNull={props.isHabitNull}
                    // showDate={props.showDate}

                    getUserHabit={props.getUserHabit}
                    getUserHabitThisMonth={props.getUserHabitThisMonth}
                />




                {/*해빗트래커 컨텐츠 박스 */}
                <Calender
                    // showDate={props.showDate}
                    updateHabitPopupOn={props.updateHabitPopupOn}
                    deleteHabitPopupOn={props.deleteHabitPopupOn}
                    HabitAlertPopupOn={props.HabitAlertPopupOn}
                    habits={props.habits}

                    
                    selected={props.selected}
                    selectedDate={props.selectedDate}
                    
                    

                    getUserHabit={props.getUserHabit}
                />



            </MonthlyHabitTrackerContainer>
        </div>
    )

}