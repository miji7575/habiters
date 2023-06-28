import RetrospectListUI from "./RetrospectList.presenter"
import { userRetrospectData, userAccessToken } from '../../../stores';
import { useRecoilState } from "recoil";


export default function RetrospectList(props) {

    
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)



    return (
        <RetrospectListUI 
        userRetrospect={userRetrospect}
        updateRetrospectsPopupOn={props.updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
        deleteRetrospectsPopupOn={props.deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
        />
    )

}