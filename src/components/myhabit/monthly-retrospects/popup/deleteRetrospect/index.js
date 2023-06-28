import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { userAccessToken } from '../../../../stores';

import Popup2BtnTextonly from '../../../../commons/popup/Popup2BtnTextonly';




export default function DeleteRetrospectsPopup(props) {


    const [popUpTitle, setPopUpTitle] = useState("정말 삭제하실건가요?")
    const [popUpSubTitle, setPopUpSubTitle] = useState("해당 기록은 삭제하시면 복구가 불가능해요!")
    const [popUpFisrtBtnText, setPopUpFirstBtnText] = useState("예")
    const [popUpSecondBtnText, setPopUpSecondBtnText] = useState("아니요")



    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)


    // --- Axios Delete  -- (회고 삭제)
    const deleteUserRetrospectData = async () => {
        if (accessToken) {
            const response = await axios.delete(`https://api.habiters.store/diaries/${props.retrospectsId}`, {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            return
        }
    }





    //   ---- 회고 삭제
    const deleteRetrospect = async () => {
        await deleteUserRetrospectData();
        await props.getUserRetrospects();
        props.deleteRetrospects()
        props.deleteRetrospectsPopupClose();
    }



    return (

        <>
            <Popup2BtnTextonly

                popUpTitle={popUpTitle}
                popUpSubTitle={popUpSubTitle}
                popUpFisrtBtnText={popUpFisrtBtnText}
                popUpSecondBtnText={popUpSecondBtnText}



                
                // 회고 삭제하기(첫반째버튼)
                onFisrtBtnClick={deleteRetrospect}
                
                // 닫기버튼
                popUpClose={props.deleteRetrospectsPopupClose}
                onSecondBtnClick={props.deleteRetrospectsPopupClose}



            />
        </>
    )


}