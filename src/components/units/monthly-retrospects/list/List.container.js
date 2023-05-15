import RetrospectListUI from "./List.presenter"
import { userRetrospectData, userState } from '../../../../commons/stores/Stores';
import { useRecoilState } from "recoil";


export default function RetrospectList(props) {

    
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)



    return (
        <RetrospectListUI 
        userRetrospect={userRetrospect}
        getUserRetrospects={props.getUserRetrospects}

        diaryState={props.diaryState}/* 오늘 쓴 글이 있는지 없는지 확인하려고 */
        Today={props.Today}/*오늘 날짜 */

        updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
        deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
        />
    )

}