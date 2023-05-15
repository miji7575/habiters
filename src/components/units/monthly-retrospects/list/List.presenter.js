
import { MonthlyRetrospectBox } from './List.styles'
import Retrospect from '../retrospect/Retrospect.container';


export default function RetrospectListUI(props) {




    return (

        <>

            <MonthlyRetrospectBox >

                {Object.entries(props.userRetrospect).map(([key, value]) =>
                    <Retrospect
                        contentId={value.id}
                        content={value.content}
                        date={value.createDate}
                        getUserRetrospects={props.getUserRetrospects}
                        diaryState={props.diaryState}/* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                        Today={props.Today}/*오늘 날짜 */
                        updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                        deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
                    />)}



            </MonthlyRetrospectBox>

        </>
    )

}