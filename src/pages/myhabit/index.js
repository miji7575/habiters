import { useState, useEffect } from "react"
import styled from '@emotion/styled'
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userDetail, userState, headerSelectedMenu } from '../../components/stores';
import { useRouter } from "next/router";



import MyHabitToggle from '../../components/units/toggle/Toggle.container';
import MonthlyHabitTracker from '../../components/units/monthly-habittracker/MonthlyHabit.container';
import MonthlyRetrospects from '../../components/units/monthly-retrospects/MonthlyRetrospects.container';



// ============================== Style ==============================
const Main = styled.div`
    display: flex;
    justify-content: center;

`

const Content = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;

`

const Title = styled.div`
    padding: 72px 0 48px 0;
`






export default function HabitTracker() {



    // ============================== Function  ==============================

    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [user, setUser] = useRecoilState(userDetail);
    const [userName, setUserName] = useState("")
   

    const router = useRouter()

    useEffect(() => {
        if (!accessToken) {
            router.push("/login")
        }
       
    }, [])

    useEffect(() => {
        setUserName(user.nickName)
        
    }, [user])






   








    // ----- 달력

    // 달력
    const nowDate = new Date();
    const [year, setYear] = useState(nowDate.getFullYear()); //현재 연도
    // const [month, setMonth] = useState((nowDate.getMonth() + 1).padStart(2,'0')); //현재 월
    const [month, setMonth] = useState(nowDate.toJSON().substring(5, 7)); //현재 월
    const [date, setDate] = useState(nowDate.getDate()); //현제 일자

    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    // const [startDay, setStartDay] = useState(WEEKDAY[new Date(year, month-1, 1).getDay()]); //월의 시작 요일
    const [startDay, setStartDay] = useState(new Date(year, month - 1, 1).getDay()); //월의 시작 요일



    const [lastDate, setLastDate] = useState(new Date(year, month, 0).getDate());
    const [dates, setDates] = useState([])
    const [days, setDays] = useState([]);

    let newDates = []
    let newDays = []

    const showDate = {
        showYear: year,
        showMonth: month,
        showDays: days,
        showDates: dates,
        startday: startDay,
        lastDate: lastDate
    }


    useEffect(() => {
        setLastDate(() => (new Date(year, month, 0).getDate()));
        setStartDay(() => new Date(year, month - 1, 1).getDay())
        // getUserHabit();
    }, [year, month])

    useEffect(() => {
        makeCalender();
    }, [lastDate, startDay])




    const makeCalender = () => {

        for (let i = 1; i <= lastDate; i++) {
            newDates.push(i)
            newDays.push(WEEKDAY[(i - 1 + startDay) % 7])
        }
        setDates(newDates);
        setDays(newDays)
    }

    const resetCalender = () => {
        setYear(nowDate.getFullYear())
        setMonth(nowDate.toJSON().substring(5, 7))
    }



    // --- 이전 달
    const monthDown = () => {
        setMonth(month => ('00' + (Number(month) - 1)).slice(-2));
        if (month == '01') {
            setMonth(12)
            setYear(year => year - 1)
        }
    }

    // --- 다음 달
    function monthUp() {
        setMonth(month => ('00' + (Number(month) + 1)).slice(-2));
        if (month == 12) {
            setMonth('01')
            setYear(year => year + 1)
        }
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


                        <Title className="headline1 color-black1">
                            안녕하세요, {userName}님!
                        </Title>


                        <MyHabitToggle
                            MonthlyHabitTrackerOn={MonthlyHabitTrackerOn}
                            MonthlyRetrospectsOn={MonthlyRetrospectsOn}
                        />


                        {isMonthlyHabitTrackerOn && <MonthlyHabitTracker
                            showDate={showDate}
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