import axios from 'axios';
import { useRecoilState } from "recoil";
import MonthlyRetrospectsUI from "./MonthlyRetrospects.presenter"
import { useEffect, useState } from 'react';
import { userAccessToken, userRetrospectData, visibleDateState } from '../../../components/stores';
import UpdateRetrospectsPopup from './popup/updateRetrospect';
import DeleteRetrospectsPopup from './popup/deleteRetrospect';



export default function MonthlyRetrospects(props) {


    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectData)
    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)



    // ----- Axios get --- get Retrospect Data (유저의 회고 목록 가져오기)
    const getUserRetrospects = async () => {
        if (accessToken) {
            const URL = `https://api.habiters.store/diaries?date=${visibleDate.year}-${visibleDate.month}`
            const response = await axios.get(URL,
                {
                    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessToken },
                }
            )
            setUserRetrospect(() => response.data.data)
            console.log(response.data.data)
        }
        return
    }

    useEffect(() => {
        getUserRetrospects()
    }, [visibleDate.year, visibleDate.month])


    // --------------------------------작성 가능 여부 판별


    const currentDate = new Date();
    const todayMonth = ('00' + (Number(currentDate.getMonth() + 1))).slice(-2)
    const todayDate = ('00' + (Number(currentDate.getDate()))).slice(-2)
    const Today = currentDate.getFullYear() + "-" + todayMonth + "-" + todayDate
    const [todayRetrospectState, setTodayRetrospectState] = useState(false)


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
    }, [userRetrospect])







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

    const deleteRetrospects = async () => {
        setTodayRetrospectState(false)
    }



    return (

        <>
            <MonthlyRetrospectsUI
                getUserRetrospects={getUserRetrospects} /*  API - getUserRetrospects 작업 완료 후 새로 불러오기 */
                userRetrospect={userRetrospect} /* 회고록 있는지 없는지 여부 확인 위해. */
                todayRetrospectState={todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
                updateRetrospectsPopupOn={updateRetrospectsPopupOn} /* 수정 팝업을 열기 위한 함수 */
                deleteRetrospectsPopupOn={deleteRetrospectsPopupOn} /* 삭제 팝업을 열기 위한 함수 */
            />



            {/* --- 회고록 수정 팝업 --- */}
            {isUpdateRetrospectsPopupOn &&
                <UpdateRetrospectsPopup
                    updateRetrospectsPopupClose={updateRetrospectsPopupClose} /* 수정 팝업을 닫기 위한 함수 */
                    retrospectsId={retrospectsId} /* 지울 회고의 Id */
                    retrospectsContent={retrospectsContent} /* 지울 회고의 Content */
                    getUserRetrospects={getUserRetrospects} /*  API - getUserRetrospects 작업 완료 후 새로 불러오기 */
                />
            }
            {/* --- 회고록 삭제 팝업 --- */}
            {isDeleteRetrospectsPopupOn &&
                <DeleteRetrospectsPopup
                    deleteRetrospectsPopupClose={deleteRetrospectsPopupClose}/* 삭제 팝업을 닫기 위한 함수 */
                    retrospectsId={retrospectsId} /* 지울 회고의 Id */
                    getUserRetrospects={getUserRetrospects} /*  API - getUserRetrospects 작업 완료 후 새로 불러오기 */
                    deleteRetrospects={deleteRetrospects} /* 이거 있으면 안되긴 하는데 일단 Test용으로 (지우고 나서 오늘 작성한 회고록이 있는지 확인.) */
                />}

        </>
    )

}