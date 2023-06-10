import { useEffect, useState } from "react"
import RetrospectUI from "./Retrospect.presenter"
import axios from "axios";
import { useRecoilState } from "recoil";
import { userRetrospectData } from '../../../../components/stores';



export default function Retrospect(props) {


    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    // console.log(new Date(props.date))
    // const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectState)






    // ---------------------------UI변화부분
    const [isEditable, setIsEditable] = useState(false)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)

    const today = props.Today
    const yesterday = today.slice(0,8) + ('00' + (Number(today.slice(-2) -1))).slice(-2);;
   

    const createDate = props.date;


    const createDateCheck = () => {
       
        switch(createDate.slice(0,10)){
            
            case today:
                setIsEditable(true)
                console.log("오늘")
                break;
            case yesterday:
                let createDateToJson = new Date(createDate)
                console.log(createDate)
                console.log(createDateToJson)
                console.log(createDateToJson.getHours())
                // let aa = createDateToJson.setHours(createDateToJson.getHours()+5)
                console.log(new Date(createDateToJson.setHours(createDateToJson.getHours()+24)))
                // const validDate = checkDate.getHours()+24;
                // console.log(setCheckDate(validDate))
                setIsEditable(true)
                console.log("어제")
                break;
            
        }

        // if(createDate.includes(yesterday) || createDate.includes(today)){
        //     setIsEditable(true)
        //     return
        // }
        // if(createDate.includes(today)){
            
        // }
    }
    // todayData.getFullYear() + "-" + todayMonth + "-" + ('00' + (Number(todayData.getDate())-1)).slice(-2);

    useEffect(() => {
        // if (props.todayRetrospectState && (props.date.includes(props.Today))) {
        // props.diaryState 없이 그냥 객체별 생성일과 오늘 날짜를 비교하는 뒤에 식만 있어도 될 것 같다
        setIsEditable(false)
        createDateCheck();
        // if ((createDate.includes(yesterday))) {
        //     setIsEditable(true)
        //     return
        // }


    })

    // --- 수정할 id와 내용을 넘겨주면서 팝업을 켠다.
    const updateRetrospectsPopupOn = async () => {
        props.updateRetrospectsPopupOn(props.contentId, props.content)
    }

    // ---삭제할 id넘겨주면서 팝업을 켠다.
    const deleteRetrospectsPopupOn = async () => {
        props.deleteRetrospectsPopupOn(props.contentId)
    }

    return (
        <RetrospectUI
            date={new Date(props.date).getDate()}
            day={WEEKDAY[new Date(props.date).getDay()]}
            content={props.content}



            todayRetrospectState={props.todayRetrospectState}/* 오늘 쓴 글이 있는지 없는지 확인하려고 */
            isEditable={isEditable}/* 수정 가능한 UI로 변경위한 State */

            updateRetrospectsPopupOn={updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
            deleteRetrospectsPopupOn={deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
        />
    )

}