import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { TextareaValueState, userAccessToken } from '../../../../stores';

import Popup2BtnTextarea from '../../../../commons/popup/Popup2BtnTextarea';




export default function UpdateHabitPopup(props) {


    const [popUpTitle, setPopUpTitle] = useState("오늘의 회고 수정")
    const [popUpSubTitle, setPopUpSubTitle] = useState("")
    const [popUpPlaceHolder, setPopUpPlaceHolder] = useState("오늘의 회고를 작성해주세요.\n작성한 회고는 24시간 이내로만 수정이 가능해요.")
    const [popUpFisrtBtnText, setPopUpFirstBtnText] = useState("취소하기")
    const [popUpSecondBtnText, setPopUpSecondBtnText] = useState("수정완료")







    const [textareaValue, setTextareaValue] = useRecoilState(TextareaValueState)
    const textareaName = "retrospectsUpdate"
    const { retrospectsUpdate } = textareaValue;
    useEffect(() => {
        setTextareaValue({ ["retrospectsUpdate"]: props.retrospectsContent })
    }, [])



useEffect(()=>{
    console.log(textareaValue)
})


    // --- Axios Update
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const updateUserRetrospectData = async () => {
        // console.log(props.retrospectsId)
        if (accessToken) {
            const response = await axios.put(`https://api.habiters.store/diaries/${props.retrospectsId}`, retrospectsUpdate, {

                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })

            return
        }
    }

    const updateRetrospect = async () => {
        if (retrospectsUpdate.length <=200) {
            await updateUserRetrospectData()
            await props.getUserRetrospects()
            setTextareaValue('')
            props.updateRetrospectsPopupClose();

        }

    }


    function updateRetrospectsPopupClose() {
        props.updateRetrospectsPopupClose();
        setTextareaInput('')
    }



    return (

        <>
            <Popup2BtnTextarea

                popUpTitle={popUpTitle}
                popUpSubTitle={""}
                placeholder={popUpPlaceHolder}
                popUpFisrtBtnText={popUpFisrtBtnText}
                popUpSecondBtnText={popUpSecondBtnText}

                // textarea Component 에서 사용
                name={textareaName}
                value={retrospectsUpdate}
                // isError={isError}
                // errorMessage={errorMessage}
                // onChange={onChangeHandler}


                // 닫기버튼
                popUpClose={updateRetrospectsPopupClose}

                // 습관추가하기
                onFisrtBtnClick={updateRetrospectsPopupClose}
                onSecondBtnClick={updateRetrospect}



            />
        </>
    )


}