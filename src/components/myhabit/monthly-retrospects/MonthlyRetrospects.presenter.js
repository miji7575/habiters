
import { MonthlyRetrospectContainer, MonthlyRetrospectNoneImgBox, MonthlyRetrospectNoneImg } from './MonthlyRetrospects.styles'

import YearDateBox from '../../units/year-date-box/YearDateBox.container';
import TodayRetrospect from './today-retrospects/TodayRetrospect.container';
import RetrospectList from './retrospectList/RetrospectList.container';


export default function MonthlyHabitTrackerUI(props) {




    return (
        // html 부분을 여기에 담아라
        <div>

            <MonthlyRetrospectContainer>

                <YearDateBox/>

                {/* <!-- ---  오늘의 회고 -----> */}
                < TodayRetrospect
                    getUserRetrospects={props.getUserRetrospects} /* API - getUserRetrospects */
                    todayRetrospectState={props.todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                />


                {/* <!-- ---  월간 회고가 없을 때 나타나는 이미지  ---  --> */}
                {(props.userRetrospect.length == 0) && <MonthlyRetrospectNoneImgBox>
                    <MonthlyRetrospectNoneImg src="/image/img-no-retrospect.svg" alt="작성된 회고 없음" />
                </MonthlyRetrospectNoneImgBox>}




                {/* 월간회고 컨텐츠 박스 */}
                <RetrospectList
                    updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                    deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
                />






            </MonthlyRetrospectContainer>
        </div>
    )

}