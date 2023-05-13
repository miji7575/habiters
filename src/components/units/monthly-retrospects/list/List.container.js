import RetrospectListUI from "./List.presenter"
import { userRetrospectState, userState } from '../../../../commons/stores/Stores';
import { useRecoilState } from "recoil";


export default function RetrospectList(props) {

    
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectState)



    return (
        <RetrospectListUI 
        userRetrospect={userRetrospect}
        getUserRetrospects={props.getUserRetrospects}
        />
    )

}