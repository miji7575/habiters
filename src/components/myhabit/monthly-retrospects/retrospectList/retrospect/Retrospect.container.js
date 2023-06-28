import { useEffect, useState } from "react"
import RetrospectUI from "./Retrospect.presenter"




export default function Retrospect(props) {


    //  -- 날짜
    const currentDate = new Date();
    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];


    // ---------------------------UI변화부분(24 시간 이내 수정 여부)
    const [isEditable, setIsEditable] = useState(false)



    const createDateCheck = () => {

        const createDate = new Date(props.createDate);
        const endUpdateDate = new Date(createDate.setDate(createDate.getDate() + 1));

        setIsEditable(false);
        switch (endUpdateDate > currentDate) {

            case true:
                setIsEditable(true)
                break;
        }
    }

    useEffect(() => {
        createDateCheck();
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
            date={new Date(props.createDate).getDate()} /* 날짜 */
            day={WEEKDAY[new Date(props.createDate).getDay()]} /* 요일 */
            content={props.content} /* 회고 내용 */
            isEditable={isEditable}/* 수정 가능한 UI로 변경위한 State */
            updateRetrospectsPopupOn={updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
            deleteRetrospectsPopupOn={deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
        />
    )

}