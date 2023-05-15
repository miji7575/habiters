import axios from 'axios';
import { useRecoilState } from "recoil";
import MonthlyRetrospectsUI from "./MonthlyRetrospects.presenter"
import { useEffect, useState } from 'react';
import { userRetrospectData, userState } from '../../../commons/stores/Stores';
import UpdateRetrospectsPopup from './update-retrospects-popup';
import {DeleteRetrospectsPopup} from './delete-retrospects-popup/';



export default function MonthlyRetrospects(props) {




    // 로직을 여기다 담아라
    // ----- Retrospect Data 
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)

    const getUserRetrospects = async () => {
        if (accessToken) {

            console.log("토큰" + accessToken)
            // console.log(props.showDate.showYear + '-' + props.showDate.showMonth)
            const URL = `https://api.habiters.store/diaries`
            // ?date={Option:${props.showDate.showYear}-${props.showDate.showMonth}}
            const response = await axios.get(URL,
                {
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain', Authorization: 'Bearer ' + accessToken },
                }
            )

            console.log("getUserRetrospects 실행됨")

            setUserRetrospect(() => response.data.data)
            await checkDiaryState()
            console.log(userRetrospect)
        }

        return
    }

    useEffect(() => {
        getUserRetrospects()
    }, [])


    // --------------------------------날짜에 따른 수정 가능 여부
    // console.log(Object.entries(userRetrospect).map(([key,value])=>{value.createDate}))
    // console.log(Object.entries(userRetrospect)[key,value])

    // --- 오늘 작성한 글이 있는지 확인
    const [diaryState, setDiaryState] = useState(false)
    const todayData = new Date();
    const todayMonth = ('00' + (Number(todayData.getMonth() + 1))).slice(-2)
    const todayDate = ('00' + (Number(todayData.getDate()))).slice(-2)
    const Today = todayData.getFullYear() + "-" + todayMonth + "-" + todayDate
    useEffect(() => {
        checkDiaryState()
        console.log("오늘 날짜 : " + Today)
        console.log("diaryState : " + diaryState)

    })

    const checkDiaryState = async () => {
        for (const [key, value] of Object.entries(userRetrospect)) {
            // console.log(`${key}: ${value.createDate}`);
            // console.log(Today)
            if (value.createDate.includes(Today)) {
                setDiaryState(true)
                console.log(diaryState)
                return
            }

        }
    }



    // -------수정팝업
    const [retrospectsId, setRetrospectsId] = useState()
    const [retrospectsContent, setRetrospectsContent] = useState()
    const [isUpdateRetrospectsPopupOn, setIsUpdateRetrospectsPopupOn] = useState(false)

    function updateRetrospectsPopupOn(retrospectsId, retrospectsContent) {
        setRetrospectsId(() => retrospectsId)
        setRetrospectsContent(() => retrospectsContent)
        setIsUpdateRetrospectsPopupOn(true);
    }
    function updateRetrospectsPopupClose() {
        setIsUpdateRetrospectsPopupOn(false)
        console.log("닫음")
    }
    // function updateRetrospects() {
    //     updateHabitPopupClose();
    // }

    // ------- 삭제 팝업
    const [isDeleteRetrospectsPopupOn, setIsDeleteRetrospectsPopupOn] = useState(false)
    function deleteRetrospectsPopupOn(retrospectsId) {
        setRetrospectsId(() => retrospectsId)
        setIsDeleteRetrospectsPopupOn(true);
    }
    function deleteRetrospectsPopupClose() {
        setIsDeleteRetrospectsPopupOn(false)
        console.log("닫음")
    }



    return (

        <>
            <MonthlyRetrospectsUI
                showDate={props.showDate}
                monthDown={props.monthDown}
                monthUp={props.monthUp}


                getUserRetrospects={getUserRetrospects}
                userRetrospect={userRetrospect}

                diaryState={diaryState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                Today={Today}/*오늘 날짜 */


                updateRetrospectsPopupOn={updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                deleteRetrospectsPopupOn={deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
            />



            {/* --- 회고록 수정 팝업 --- */}
            {isUpdateRetrospectsPopupOn &&
                <UpdateRetrospectsPopup
                    updateRetrospectsPopupClose={updateRetrospectsPopupClose} /* 수정 팝업을 닫기 위한 함수 */
                    retrospectsId={retrospectsId} /* 지울 회고의 Id */
                    retrospectsContent={retrospectsContent} /* 지울 회고의 Content */
                    getUserRetrospects={getUserRetrospects} /* 작업 완료 후 새로 불러오기 */
                />
            }
            {/* --- 회고록 삭제 팝업 --- */}
            {isDeleteRetrospectsPopupOn &&
                <DeleteRetrospectsPopup
                    deleteRetrospectsPopupClose={deleteRetrospectsPopupClose}/* 삭제 팝업을 닫기 위한 함수 */
                    retrospectsId={retrospectsId} /* 지울 회고의 Id */
                    getUserRetrospects={getUserRetrospects} /* 작업 완료 후 새로 불러오기 */
                    checkDiaryState={checkDiaryState} /* 이거 있으면 안되긴 하는데 일단 Test용으로 (지우고 나서 오늘 작성한 회고록이 있는지 확인.) */


                />}

        </>
    )

}