import { useState, useEffect, useCallback } from "react"
import { useRecoilState, useRecoilValue, atom } from 'recoil';
import MonthlyHabitTrackerUI from "./MonthlyHabit.presenter"
import { userHabitState, userAccessToken, visibleDateState, resetCalenderStaste, userHabitStateThisMonth } from '../../../components/stores';
import axios from "axios";

// POPUP
import AddHabitPopup from './popup/addHabit';//--해빗추가 
import UpdateHabitPopup from './popup/updateHabit';// -- 해빗 수정
import DeleteHabitPopup from './popup/deleteHabit';//-- 해빗삭제
import HabitAlert from './popup/habitAlert';//-- 해빗 ALert



export default function MonthlyHabitTracker(props) {

    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    const [habits, setHabits] = useRecoilState(userHabitState)
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [habitsThisMonth, setHabitThisMonth] = useRecoilState(userHabitStateThisMonth)


    useEffect(() => {
        getUserHabit()
    }, [visibleDate.year, visibleDate.month])



    // --- Axios get--- 유저의 habit 목록 get (캘린더에서 사용)
    const getUserHabit = async () => {


        getUserHabitThisMonth()


        if (accessToken && visibleDate.month && visibleDate.year) {

            const response = await axios.get(`https://api.habiters.store/habits?date=${visibleDate.year}-${visibleDate.month}`, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            setHabits(() => response.data.data)
            return
        }
        return
    }

    // --- Axios get--- 유저의 이번달 habit 목록 get (일별확인에서 사용)
    const getUserHabitThisMonth = async () => {

        const todayMonth = (('00' + (Number(todayDate.getMonth()) + 1)).slice(-2))

        if (accessToken) {

            const response = await axios.get(`https://api.habiters.store/habits?date=${year}-${todayMonth}`, {
                headers: { "Content-Type": "application/json", Authorization: 'Bearer ' + accessToken }
            })
            setHabitThisMonth(() => response.data.data)
            return
        }
        return
    }






    // --- 습관 추가하기
    const [isaddNewHabitPopupOn, setIsaddNewHabitPopupOn] = useState(false)

    function addNewHabitPopupOn() {
        setIsaddNewHabitPopupOn(true)
    }
    function addNewHabitPopupClose() {
        setIsaddNewHabitPopupOn(false)
    }



    const [habitId, setHabitId] = useState()
    const [selectedHabitName, setSelectedHabitName] = useState()

    // --- 습관이름 수정하기
    const [isUpdateHabitPopupOn, setIsUpdateHabitPopupOn] = useState(false)

    function updateHabitPopupOn(habitId, habitname) {
        setHabitId(() => habitId)
        setSelectedHabitName(() => habitname)
        setIsUpdateHabitPopupOn(true);
    }
    function updateHabitPopupClose() {
        setIsUpdateHabitPopupOn(false)
    }


    // --- 습관 삭제하기
    const [isDeleteHabitPopupOn, setIsDeleteHabitPopupOn] = useState(false);

    function deleteHabitPopupOn(habitId) {
        setHabitId(() => habitId)
        setIsDeleteHabitPopupOn(true)
    }
    function deleteHabitPopupClose() {
        setIsDeleteHabitPopupOn(false)
    }




    // ----습관이 없을 때
    const [isHabitNull, setIsHabitNull] = useState(false)

    useEffect(() => {
        if (habits.length === 0) {
            setIsHabitNull(true)
        }
        else {
            setIsHabitNull(false)
        }

    }, [habits])




    // --- 오늘 날짜
    const todayDate = new Date()
    const [year, setYear] = useState(todayDate.getFullYear());
    const [month, setMonth] = useState(todayDate.getMonth() + 1);
    const [date, setDate] = useState(todayDate.getDate());
    const today = year + "-" + month + "-" + date;


    useEffect(() => {
        // console.log(visibleDate)
    })

    const [selectedDate, setSelectedDate] = useState(today)







    // ------- 당일습관 팝업
    const [isHabitAlertOn, setIsHabitAlertOn] = useState(false)
    const [popupMessage, setPopupMessage] = useState('')

    const HabitAlertPopupOn = (props) => {
        setPopupMessage(props)
        setIsHabitAlertOn(true)
    }

    const HabitAlertPopupClose = () => {
        setIsHabitAlertOn(false)
    }



    // 달력 초기화 State
    const [isResetCalender, setIsResetCalender] = useRecoilState(resetCalenderStaste)

    const resetCalender = () => {
        setIsResetCalender(true)
    }



    return (
        <>



            <MonthlyHabitTrackerUI
                
                // popup실행함수
                addNewHabitPopupOn={addNewHabitPopupOn}
                updateHabitPopupOn={updateHabitPopupOn}
                deleteHabitPopupOn={deleteHabitPopupOn}
                HabitAlertPopupOn={HabitAlertPopupOn}

                habits={habits}
                isHabitNull={isHabitNull}
                selectedDate={selectedDate}
                resetCalender={resetCalender} // 오늘 버튼 누르면 작동
                getUserHabit={getUserHabit}
            />


            {/* ------------------------------  Popup  ------------------------------ */}

            {/*  습관 등록 팝업 */}
            {isaddNewHabitPopupOn && <AddHabitPopup
                addNewHabitPopupClose={addNewHabitPopupClose}
                getUserHabit={getUserHabit}


            />}

            {/* 습관 수정 팝업 */}
            {isUpdateHabitPopupOn && <UpdateHabitPopup
                updateHabitPopupClose={updateHabitPopupClose}
                selectedHabitName={selectedHabitName}
                habitId={habitId}
                getUserHabit={getUserHabit}
            />}

            {/* 습관 삭제 팝업 */}
            {isDeleteHabitPopupOn && <DeleteHabitPopup
                deleteHabitPopupClose={deleteHabitPopupClose}
                habitId={habitId}
                getUserHabit={getUserHabit}
            />}


            {/* 당일 이외의 Habit 체크 불가능 Alert */}
            {isHabitAlertOn && <HabitAlert
                HabitAlertPopupClose={HabitAlertPopupClose}
                popUpTitle={popupMessage}
            />}
        </>


    )

}