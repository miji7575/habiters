import axios from 'axios';
import { useRecoilState } from "recoil";
import MonthlyRetrospectsUI from "./MonthlyRetrospects.presenter"
import { useEffect, useState } from 'react';
import { userRetrospectData, userState } from '../../../commons/stores/Stores';
import UpdateRetrospectsPopup from './update-retrospects-popup';
import DeleteRetrospectsPopup from './delete-retrospects-popup/DeleteRetrospectsPopup';



export default function MonthlyRetrospects(props) {


    // ----- Axios get --- get Retrospect Data (유저의 회고 목록 가져오기)
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)

    const getUserRetrospects = async () => {
        if (accessToken) {
            const URL = `https://api.habiters.store/diaries?date=${props.showDate.showYear}-${props.showDate.showMonth}`
            const response = await axios.get(URL,
                {
                    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessToken },
                }
            )
            setUserRetrospect(() => response.data.data)
        }
        return
    }

    useEffect(() => {
        getUserRetrospects()
    }, [props.showDate.showMonth])


    // --------------------------------작성 가능 여부 판별
    

    // --- 오늘 작성한 글이 있는지 확인
    const todayData = new Date();
    const todayMonth = ('00' + (Number(todayData.getMonth() + 1))).slice(-2)
    const todayDate = ('00' + (Number(todayData.getDate()))).slice(-2)
    const Today = todayData.getFullYear() + "-" + todayMonth + "-" + todayDate

    const checkTodayRetrospectsExist = async () => {
        for (const [key, value] of Object.entries(userRetrospect)) {
            if (value.createDate.includes(Today)) {
                setTodayRetrospectState(true)
                return
            }
        }
    }
    useEffect(() => {
        checkTodayRetrospectsExist()
    },[])


    // ----- 오늘 작성한 글이 있을 때 입력 막기
    const [todayRetrospectState, setTodayRetrospectState] = useState(false)

    const createTodayRetrospects = async() => {
        setTodayRetrospectState(true)
    }



    // -------오늘의 회고 수정팝업
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
    }


    // ------- 회고 삭제 팝업
    const [isDeleteRetrospectsPopupOn, setIsDeleteRetrospectsPopupOn] = useState(false);
    function deleteRetrospectsPopupOn(retrospectsId) {
        setRetrospectsId(() => retrospectsId);
        setIsDeleteRetrospectsPopupOn(true);
    }
    function deleteRetrospectsPopupClose() {
        setIsDeleteRetrospectsPopupOn(false);
    }

    const deleteRetrospects = async() => {
        setTodayRetrospectState(false)
    }



    return (

        <>
            <MonthlyRetrospectsUI
                showDate={props.showDate}
                monthDown={props.monthDown}
                monthUp={props.monthUp}


                getUserRetrospects={getUserRetrospects}
                userRetrospect={userRetrospect}

                todayRetrospectState={todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                // --------
                createTodayRetrospects={createTodayRetrospects}
                // --------
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



                    deleteRetrospects={deleteRetrospects} /* 이거 있으면 안되긴 하는데 일단 Test용으로 (지우고 나서 오늘 작성한 회고록이 있는지 확인.) */


                />}

        </>
    )

}