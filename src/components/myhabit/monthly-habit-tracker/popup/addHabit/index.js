import axios from "axios";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { InputValue, userAccessToken } from '../../../../stores';

import Popup1BtnInputUI from '../../../../commons/popup/Popup1BtnInput';




export default function AddHabitPopup(props) {


    const [popUpTitle, setPopUpTitle] = useState("새로운 습관 만들기")
    const [popUpSubTitle, setPopUpSubTitle] = useState("")
    const [popUpPlaceHolder, setPopUpPlaceHolder] = useState("만드실 습관을 10자 이내로 입력해주세요.")
    const [popUpBtnText, setPopUpBtnText] = useState("습관 만들기")



    // ----- axios(post) -- 습관이름 등록하기
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const postHabit = async () => {
        if (accessToken) {
            const response = await axios.post('https://api.habiters.store/habits', {
                "content": habitName
            }, {
                headers: { "Content-Type": "application/json", Authorization: `Bearer ` + accessToken },
            })
            return
        }

    }



    // ----- input
    const inputName = "habitName"
    const [newInput, setNewInput] = useRecoilState(InputValue)
    const { habitName } = newInput;




    const onChange = (e) => {
        // ================================
        // const { value, name } = e.target;
        // setNewInput({ ...newInput, [name]: value })
        // ================================
        // setIsError(false)
    };




    // ----- habit 유효성 검사
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

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





    // ------Habit 추가하기
    const addNewhabit = async () => {

        const habitValidStatus = habitInputCheck();

        if (habitValidStatus) {
            await postHabit()
            await props.getUserHabit();
            props.addNewHabitPopupClose();

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

    // ----- 팝업창 닫기
    function addNewHabitPopupClose() {
        setNewInput('')
        props.addNewHabitPopupClose();
    }




    return (

        <>
            <Popup1BtnInputUI

                popUpTitle={popUpTitle}
                popUpSubTitle={""}
                popUpPlaceHolder={popUpPlaceHolder}
                popUpBtnText={popUpBtnText}

                // inputComponent 에서 사용
                inputName={inputName}
                value={habitName}
                isError={isError}
                errorMessage={errorMessage}
                onChange={onChange}


                // 닫기버튼
                addNewHabitPopupClose={addNewHabitPopupClose}

                // 습관추가하기
                addNewhabit={addNewhabit}



            />
        </>
    )


}