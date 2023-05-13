import axios from "axios";
import TodayRetrospectUI from "./TodayRetrospect.presenter"
import { useRecoilState } from "recoil";
import {userState, TextareaValueState} from '../../../commons/stores/Stores';



export default function TodayRetrospect(props) {

    // 로직을 여기다 담아라
    const placeholder = "오늘의 회고를 작성해주세요.  \n작성한 회고는 24시간 이내로만 수정이 가능해요."
    const textareaErrorMessage = "";




     //  ----- Axios put(update)
     const [accessToken, setAccessToken] = useRecoilState(userState)
     const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)
     const postRetrospects = async () => {
        console.log("!@!@!@!@!@!@!@!!@!@!!@")
        console.log(textareaInput)
         if (accessToken) {
             const response = await axios.post(`http://223.130.162.40:8080/diaries`, textareaInput, {
                 headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
             })
             console.log(response)
             return
         }
     }

     const onPostRetrospectsBtnClick = async() => {
        await postRetrospects();
        props.getUserRetrospects()
        setTextareaInput('')
     }





    return (
        <TodayRetrospectUI 
        placeholder={placeholder}
        textareaErrorMessage={textareaErrorMessage}
        onPostRetrospectsBtnClick={onPostRetrospectsBtnClick}
        />
    )

}