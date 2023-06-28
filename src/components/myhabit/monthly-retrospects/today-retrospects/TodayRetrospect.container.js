import axios from "axios";
import TodayRetrospectUI from "./TodayRetrospect.presenter"
import { useRecoilState } from "recoil";
import { userAccessToken, TextareaValueState } from '../../../stores';
import { useEffect, useState } from "react";





export default function TodayRetrospect(props) {



    // Textarea 
    const [textareaValue, setTextareaValue] = useRecoilState(TextareaValueState)
    const textareaName = "retrospectsPost"
    const { retrospectsPost } = textareaValue;



    // ----- 오늘의 회고 입력창 placeHolder
    const [placeholder, setPlaceholder] = useState("오늘의 회고를 작성해주세요.  \n작성한 회고는 24시간 이내로만 수정이 가능해요.")

    useEffect(() => {
        if (props.todayRetrospectState) {
            setPlaceholder("오늘의 회고를 이미 작성했어요.  \n내일 또 만나요!")
        }
        else {
            setPlaceholder("오늘의 회고를 작성해주세요.  \n작성한 회고는 24시간 이내로만 수정이 가능해요.")
        }
    }, [props.todayRetrospectState])



    // ----- 에러메세지 
    const textareaErrorMessage = "";



    //  ----- Axios post() --- (오늘의 회고 등록하기)
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const postRetrospects = async () => {
        if (accessToken) {
            const response = await axios.post(`https://api.habiters.store/diaries`, retrospectsPost, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            // console.log(response)
            return
        }
    }


    // ----- 오늘의 회고 등록하기
    const onPostRetrospectsBtnClick = async () => {
        
        if (retrospectsPost.length <= 200) {
            await postRetrospects();
            props.getUserRetrospects()
            setTextareaValue('')
        }

    }






    // ---버튼 활성화
    const buttonActivation = () => {

    }



    return (
        <TodayRetrospectUI
            placeholder={placeholder}
            textareaErrorMessage={textareaErrorMessage}
            onPostRetrospectsBtnClick={onPostRetrospectsBtnClick}
            todayRetrospectState={props.todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
            name={textareaName}
            value={retrospectsPost}
        />
    )

}