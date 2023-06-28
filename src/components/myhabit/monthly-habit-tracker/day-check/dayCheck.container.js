import { useRecoilState, useRecoilValue } from "recoil"
import DayCheckUI from "./dayCheck.presenter"
import { SelectedDate } from '../../../../components/stores';
import { useEffect, useState } from "react";
import { userAccessToken, userHabitStateThisMonth, visibleDateState } from '../../../../components/stores';
import axios from "axios";


export default function DayCheck(props) {

    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    const [habitThisMonth, setHabitThisMonth] = useRecoilState(userHabitStateThisMonth)
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)

    // 현재날짜
    const todayYear = new Date().getFullYear()
    const todayMonth = new Date().getMonth() + 1
    const todayDate = new Date().getDate()
    const today = todayYear + "-" + ("00" + (Number(todayMonth))).slice(-2) + "-" + ("00" + (Number(todayDate))).slice(-2);



    // 일별 확인은 오늘의 현황만 렌더링함.

   

 

    const getUserHabit = () => {
        props.getUserHabit();
    }


    return (
        <DayCheckUI
            habits={habitThisMonth}
            isHabitNull={props.isHabitNull}
            visibleDate={visibleDate}
            getUserHabit={getUserHabit}
        />
    )

}