import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { InputValue, userAccessToken } from '../../../../stores';

import Popup2BtnInputUI from '../../../../commons/popup/Popup2BtnInput';




export default function UpdateHabitPopup(props) {




 
    // ============================== Function  ==============================
    const [popUpTitle, setPopUpTitle] = useState("습관 이름 수정")
    const [popUpSubTitle, setPopUpSubTitle] = useState("")
    const [popUpPlaceHolder, setPopUpPlaceHolder] = useState("만드실 습관을 10자 이내로 입력해주세요.")
    const [popUpFisrtBtnText, setPopUpFisrtBtnText] = useState("취소하기")
    const [popUpSecondBtnText, setPopUpSecondBtnText] = useState("수정완료")




    // --- 초기설정
    useEffect(() => {
        setNewInput({ ["habitName"]: props.selectedHabitName })

    }, [])


    //  ----- Axios put(update) -- 습관이름 수정하기
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const updateHabitData = async () => {

        if (accessToken) {
            const response = await axios.put(`https://api.habiters.store/habits/${props.habitId}`, {
                "content": newInput["habitName"]
            }, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            return
        }
    }




    // --- 습관이름 수정하기
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const updateHabit = async () => {

            const habitValidStatus = habitInputCheck();
      
            if (habitValidStatus) {
                await updateHabitData()
                props.getUserHabit();
                props.updateHabitPopupClose();
            }

    }



    // --- input
    const inputName = "habitName"
    const [newInput, setNewInput] = useRecoilState(InputValue)
    const { habitName } = newInput;


    const onChange = (e) => {
        const { value, name } = e.target;
        setNewInput({ ...newInput, [name]: value })
        setIsError(false)
    }





    // ----- habit 유효성 검사

    const habitInputCheck = () => {


        if (!habitName) {
            setIsError(true)
            setErrorMessage("습관 이름을 작성해주세요")
            return false
        }
        if (habitName.length > 10) {
            setIsError(true)
            setErrorMessage("습관 이름은 10자 이내로만 작성 가능해요.")
            return false
        }
        else {
            setIsError(false)
            setErrorMessage("")
            return true
        }

    }


    // habitName이 바뀔 때 마다 habitInputCheck() 유효성검사 실행.
    useEffect(() => {
        habitInputCheck()
    }, [habitName])



    // Recoil의 inputValue 지우고 나오기
    useEffect(() => {
        return () => {
            setNewInput(() => '')
        }
    }, [])







    // --- 팝업창 닫기
    function updateHabitPopupClose() {
        props.updateHabitPopupClose();
    }



    return (

        <>
            <Popup2BtnInputUI

                popUpTitle={popUpTitle}
                popUpSubTitle={""}
                popUpPlaceHolder={popUpPlaceHolder}
                popUpFisrtBtnText={popUpFisrtBtnText}
                popUpSecondBtnText={popUpSecondBtnText}

                // inputComponent 에서 사용
                inputName={inputName}
                value={habitName}
                isError={isError}
                errorMessage={errorMessage}
                onChange={onChange}


                // 닫기버튼
                popUpClose={updateHabitPopupClose}

                // 취소하기(첫번째 버튼)
                onFirstBtnClick={updateHabitPopupClose}
                // 습관수정하기(두번째 버튼)
                onSecondBtnClick={updateHabit}



            />
        </>
    )


}