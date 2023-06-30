import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { InputValue, userAccessToken } from '../../../../stores';

import Popup2BtnTextonly from '../../../../commons/popup/Popup2BtnTextonly';

export default function DeleteHabitPopup(props) {

    const [popUpTitle, setPopUpTitle] = useState("정말 삭제하실건가요?")
    const [popUpSubTitle, setPopUpSubTitle] = useState("해당 기록은 삭제하시면 복구가 불가능해요!")
    const [popUpFisrtBtnText, setPopUpFirstBtnText] = useState("예")
    const [popUpSecondBtnText, setPopUpSecondBtnText] = useState("아니요")



    // ============================== Function  ==============================

    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

    // ----- axios(delete) -- 습관이름 삭제하기
    const deleteHabitData = async () => {
       
        if (accessToken) {
            const response = await axios.delete(`https://api.habiters.store/habits/${props.habitId}`, {
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            return
        }
    }




    function deleteHabitPopupClose() {
        props.deleteHabitPopupClose();
    }

    const deleteHabit = async () => {
        await deleteHabitData()
        props.deleteHabitPopupClose();
        props.getUserHabit();
    }



    return (
        <>
            <Popup2BtnTextonly
                popUpTitle={popUpTitle}
                popUpSubTitle={popUpSubTitle}
                popUpFisrtBtnText={popUpFisrtBtnText}
                popUpSecondBtnText={popUpSecondBtnText}

                // habit 삭제하기
                onFirstBtnClick={deleteHabit}
                // 팝업창 닫기
                onSecondBtnClick={deleteHabitPopupClose}
                popUpClose={deleteHabitPopupClose}

            />
        </>
    )

}