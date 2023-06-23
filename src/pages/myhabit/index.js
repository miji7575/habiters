import { useState, useEffect } from "react"
import axios from 'axios';
import { useRouter } from "next/router";
import { userDetail, userAccessToken, visibleDateState } from '../../components/stores';
import { useRecoilState } from "recoil";

import { Main, Content, Title } from './myhabit.styles';// 페이지 css


import MyHabitToggle from '../../components/units/toggle/Toggle.container';
import MonthlyHabitTracker from '../../components/myhabit/monthly-habit-tracker/MonthlyHabit.container';
import MonthlyRetrospects from '../../components/units/monthly-retrospects/MonthlyRetrospects.container';








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







    // =====================  달력  =======================

    // ===================RECOIL 씀

    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState);





    // ===================RECOIL XXXXXXXXXXXXXXXXXXXXXXX
    // 달력에필요한 변수 선언
    const currentDate = new Date();
    const [year, setYear] = useState(currentDate.getFullYear()); //현재 연도
    const [month, setMonth] = useState(currentDate.toJSON().substring(5, 7)); //현재 월
    const [date, setDate] = useState(currentDate.getDate()); //현재 일자

    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    // const [startDay, setStartDay] = useState(WEEKDAY[new Date(year, month-1, 1).getDay()]); //월의 시작 요일
    const [startDay, setStartDay] = useState(new Date(year, month - 1, 1).getDay()); //월의 시작 요일
    const [lastDate, setLastDate] = useState(new Date(year, month, 0).getDate());
    const [dates, setDates] = useState([])
    const [days, setDays] = useState([]);

    let newDates = []
    let newDays = []

    const [makeCalenderDone, setMakeCalenderDone] = useState(false)

    // const showDate = {
    // //     // showYear: year,
    // //     // showMonth: month,
    // //     // showDays: days,
    // //     // showDates: dates,
    // //     // startday: startDay,
    // //     // lastDate: lastDate

    //     year: year,
    //     month: month,
    //     days: days,
    //     startDay: startDay,
    //     dates: dates,
    //     lastDate: lastDate
    // }

    useEffect(() => {
        // makeCalender();
        setVisibleDate(
            prevState => ({
                ...prevState,
                year: year,
                month: month,
                days: days,
                startDay: startDay,
                dates: dates,
                lastDate: lastDate
            }));





    }, [dates])




    useEffect(() => {
        console.log(visibleDate)
    })


    useEffect(() => {
        setLastDate(() => (new Date(year, month, 0).getDate()));
        setStartDay(() => new Date(year, month - 1, 1).getDay())

    }, [year, month])

    useEffect(() => {
        makeCalender();
    }, [lastDate, startDay])




    // -----달력 만들기
    const makeCalender = () => {

        for (let i = 1; i <= lastDate; i++) {
            newDates.push(i)
            newDays.push(WEEKDAY[(i - 1 + startDay) % 7])
        }
        setDates(newDates);
        setDays(newDays)

        // setMakeCalenderDone(true)
    }

    const resetCalender = () => {
        setYear(currentDate.getFullYear())
        setMonth(currentDate.toJSON().substring(5, 7))
    }



    // --- 이전 달로 이동
    const monthDown = () => {
        setMonth(month => ('00' + (Number(month) - 1)).slice(-2));
        if (month == '01') {
            setMonth(12)
            setYear(year => year - 1)
        }
    }

    // --- 다음 달로 이동
    function monthUp() {
        setMonth(month => ('00' + (Number(month) + 1)).slice(-2));
        if (month == 12) {
            setMonth('01')
            setYear(year => year + 1)
        }
    }


    // ------오늘로 이동하기 
    const moveToThisMonth = () => {
        setMonth(('00' + (Number(currentDate.getMonth()) + 1)).slice(-2))
    }







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


                        {isMonthlyHabitTrackerOn && <MonthlyHabitTracker
                            moveToThisMonth={moveToThisMonth}
                            visibleDate={visibleDate}
                            monthDown={monthDown}
                            monthUp={monthUp} />}



                        {isMonthlyRetrospectsOn && <MonthlyRetrospects
                            showDate={showDate}
                            monthDown={monthDown}
                            monthUp={monthUp} />}



                    </Content>
                </Main>
            </main>
        </>
    )
}