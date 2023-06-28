import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from "next/router";
import { userDetail, userAccessToken, visibleDateState } from '../../components/stores';
import { useRecoilState } from "recoil";

import { Main, Content, Title } from './myhabit.styles';// 페이지 css


import MyHabitToggle from '../../components/units/toggle/Toggle.container';
import MonthlyHabitTracker from '../../components/myhabit/monthly-habit-tracker/MonthlyHabit.container';
import MonthlyRetrospects from '../../components/myhabit/monthly-retrospects/MonthlyRetrospects.container';








export default function HabitTracker() {



    // ============================== Function  ==============================

    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [user, setUser] = useRecoilState(userDetail);



    const router = useRouter()

    // 로그인이 되어있지 않다면 로그인화면으로 이동
    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }

    }, [])








    // ----- 월간 해빗 트래커 / 월간 회고 토글

    const [isMonthlyHabitTrackerOn, setIsMonthlyHabitTrackerOn] = useState(true)
    const [isMonthlyRetrospectsOn, setIsMonthlyRetrospectsOn] = useState(false)

    function MonthlyHabitTrackerOn() {
        setIsMonthlyHabitTrackerOn(true)
        setIsMonthlyRetrospectsOn(false)
        resetCalender()
    }

    function MonthlyRetrospectsOn() {
        setIsMonthlyRetrospectsOn(true)
        setIsMonthlyHabitTrackerOn(false)
        resetCalender()
    }


    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    // --- 오늘 날짜
    const todayDate = new Date()

    // --- 오늘 날짜로 이동
    const resetCalender = () => {
        setVisibleDate({
            ...visibleDate,
            year: todayDate.getFullYear(),
            month: (('00' + (Number(todayDate.getMonth()) + 1)).slice(-2))
        })

    }





    return (

        <>

            <main>

                <Main>
                    <Content>


                        <Title className="headline1">
                            안녕하세요, {user.nickName}님!
                        </Title>


                        <MyHabitToggle
                            MonthlyHabitTrackerOn={MonthlyHabitTrackerOn}
                            MonthlyRetrospectsOn={MonthlyRetrospectsOn}
                        />


                        {isMonthlyHabitTrackerOn && <MonthlyHabitTracker />}



                        {isMonthlyRetrospectsOn && <MonthlyRetrospects/>}



                    </Content>
                </Main>
            </main>
        </>
    )
}