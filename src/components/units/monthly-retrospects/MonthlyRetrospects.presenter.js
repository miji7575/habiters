
import { MonthlyRetrospectContainer, MonthlyRetrospectNoneImgBox, MonthlyRetrospectNoneImg } from './MonthlyRetrospects.styles'

import YearDateBox from '../year-date-box/YearDateBox.container';
import TodayRetrospect from '../today-retrospects/TodayRetrospect.container';
import RetrospectList from './list/List.container';


export default function MonthlyHabitTrackerUI(props) {




    return (
        // html 부분을 여기에 담아라
        <div>

            <MonthlyRetrospectContainer>

                <YearDateBox
                    showDate={props.showDate}
                    monthDown={props.monthDown}
                    monthUp={props.monthUp}
                />

                {/* <!-- ---  오늘의 회고 -----> */}
                < TodayRetrospect
                    getUserRetrospects={props.getUserRetrospects}
                    todayRetrospectState={props.todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                    // createTodayRetrospects={props.createTodayRetrospects} /*test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!8*/
                />


                {/* <!-- ---  월간 회고가 없을 때 나타나는 이미지  ---  --> */}
                {(props.userRetrospect.length == 0) && <MonthlyRetrospectNoneImgBox>
                    <MonthlyRetrospectNoneImg src="/image/img-no-retrospect.svg" alt="작성된 회고 없음" />
                </MonthlyRetrospectNoneImgBox>}




                {/* 월간회고 컨텐츠 박스 */}
                <RetrospectList
                    data={props.data}
                    getUserRetrospects={props.getUserRetrospects}

                    todayRetrospectState={props.todayRetrospectState}/* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                    Today={props.Today}/*오늘 날짜 */

                    updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                    deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */

                />






            </MonthlyRetrospectContainer>
        </div>
    )

}