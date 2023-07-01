import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { InputValue, userAccessToken } from '../../../../stores';
import Popup2BtnInputUI from '../../../../commons/popup/Popup2BtnInput';




export default function UpdateHabitPopup(props) {


    const [popUpTitle, setPopUpTitle] = useState("습관 이름 수정")
    const [popUpSubTitle, setPopUpSubTitle] = useState("")
    const [popUpPlaceHolder, setPopUpPlaceHolder] = useState("만드실 습관을 10자 이내로 입력해주세요.")
    const [popUpFisrtBtnText, setPopUpFisrtBtnText] = useState("취소하기")
    const [popUpSecondBtnText, setPopUpSecondBtnText] = useState("수정완료")


    // --- 기존Input Value 넣어주기
    useEffect(() => {
        setNewInput({ ["habitName"]: props.selectedHabitName })

    }, [])


    // --- input
    const inputName = "habitName"
    const [newInput, setNewInput] = useRecoilState(InputValue)
    const { habitName } = newInput;

    // InputComponent에서 처리
    // const onChange = (e) => {
    //     const { value, name } = e.target;
    //     setNewInput({ ...newInput, [name]: value })
    //     setIsError(false)
    // }















    // ----- habitName 유효성 검사
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()


    // --- habitName 길이 체크
    const habitNameLengthCheck = () => {

        if (habitName && habitName.length > 10) {
            setIsError(true)
            setErrorMessage("습관 이름은 10자 이내로만 작성 가능해요.")
            return false
        }
        else if (habitName) {
            setIsError(false)
            setErrorMessage("")
            return true
        }

    }

    // --- habitName Null 체크
    const habitNullCheck = () => {

        if (!habitName) {
            setIsError(true)
            setErrorMessage("습관 이름을 작성해주세요")
            return false
        }
        else {
            setIsError(false)
            setErrorMessage("")
            return true
        }
    }









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
    const updateHabit = async () => {


        const habitNullValidStatus = habitNullCheck()
        const habitLengthValidStatus = habitNameLengthCheck();


        if (habitNullValidStatus && habitLengthValidStatus) {
            await updateHabitData()
            props.getUserHabit();
            props.updateHabitPopupClose();
        }

    }





    // habitName이 바뀔 때 마다 habitNameLengthCheck() 유효성검사 실행.
    useEffect(() => {
        habitNameLengthCheck()
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
                placeholder={popUpPlaceHolder}
                popUpFisrtBtnText={popUpFisrtBtnText}
                popUpSecondBtnText={popUpSecondBtnText}

                // inputComponent 에서 사용
                inputName={inputName}
                value={habitName}
                isError={isError}
                errorMessage={errorMessage}
                // onChange={onChange}


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