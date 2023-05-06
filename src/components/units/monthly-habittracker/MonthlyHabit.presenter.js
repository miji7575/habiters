
import { MonthlyHabitTrackerContainer, HabitTrackerHeader, AddHabitBtn } from './MonthlyHabit.styles'

import YearDateBox from '../year-date-box/YearDateBox.container';
import TodayHabitCheck from '../day-check/list/List.container';
import Calender from '../monthly-habittracker/calender/Calender.container';


export default function MonthlyHabitTrackerUI(props) {






    return (
        // html 부분을 여기에 담아라
        <div>

            <MonthlyHabitTrackerContainer>

                <HabitTrackerHeader>
                    <YearDateBox
                        showDate={props.showDate}
                        monthDown={props.monthDown}
                        monthUp={props.monthUp}
                    />
                    <AddHabitBtn className="body3-medium btn btn-medium btn-primary-default btn-width-fit-content "
                        onClick={props.addNewHabitPopupOn}>
                        <span className="icon-s icon-add-colored btn-inner-icon-white"></span>
                        <span>새로운 습관 만들기</span>
                    </AddHabitBtn>
                </HabitTrackerHeader>



                {/* <!-- ---  일별확인  ---  --> */}
                <TodayHabitCheck 
                habits={props.habits}/>




                {/*해빗트래커 컨텐츠 박스 */}
                <Calender
                    showDate={props.showDate}
                    updateHabitPopupOn={props.updateHabitPopupOn}
                    deleteHabitPopupOn={props.deleteHabitPopupOn}
                    habits={props.habits}

                />



            </MonthlyHabitTrackerContainer>
        </div>
    )

}