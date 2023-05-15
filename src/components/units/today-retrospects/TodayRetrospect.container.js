import axios from "axios";
import TodayRetrospectUI from "./TodayRetrospect.presenter"
import { useRecoilState } from "recoil";
import { userState, TextareaValueState } from '../../../commons/stores/Stores';
import { useEffect, useState } from "react";





export default function TodayRetrospect(props) {

    // 로직을 여기다 담아라
    const [placeholder, setPlaceholder] = useState("오늘의 회고를 작성해주세요.  \n작성한 회고는 24시간 이내로만 수정이 가능해요.")
    const textareaErrorMessage = "";




    //  ----- Axios put(update)
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)
    const postRetrospects = async () => {
        console.log("!@!@!@!@!@!@!@!!@!@!!@")
        console.log(textareaInput)
        if (accessToken) {
            const response = await axios.post(`https://api.habiters.store/diaries`, textareaInput, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            console.log(response)
            return
        }
    }

    const onPostRetrospectsBtnClick = async () => {
        await postRetrospects();
        props.getUserRetrospects()
        setTextareaInput('')
    }


    // ---------------------------UI변화부분
  

    useEffect(() => {
        if (props.diaryState) {
            setPlaceholder("오늘의 회고를 이미 작성했어요.  \n내일 또 만나요!")
        }
    }, [props.diaryState])


    return (
        <TodayRetrospectUI
            placeholder={placeholder}
            textareaErrorMessage={textareaErrorMessage}
            onPostRetrospectsBtnClick={onPostRetrospectsBtnClick}
            diaryState={props.diaryState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
        />
    )

}