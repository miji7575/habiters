import { useRecoilState } from "recoil"
import YearDateBoxUI from "./YearDateBox.presenter"
import { visibleDateState, resetCalenderStaste } from '../../stores';
import { useEffect, useState } from "react";



export default function YearDateBox(props) {



    // 달력 날짜 초기화
    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)

    const currentDate = new Date();
    const [year, setYear] = useState(currentDate.getFullYear()); //현재 연도
    const [month, setMonth] = useState(('00' + (Number(currentDate.getMonth() + 1))).slice(-2)); //현재 월
    const [date, setDate] = useState(currentDate.getDate()); //현재 일자
    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    const [startDay, setStartDay] = useState(new Date(year, month - 1, 1).getDay()); //월의 시작 요일
    const [lastDate, setLastDate] = useState(new Date(year, month, 0).getDate());
    const [dates, setDates] = useState([])
    const [days, setDays] = useState([]);






  

    useEffect(() => {

        setVisibleDate(
            prevState => ({
                ...prevState,
                year: year,
                month: month,
                days: days,
                dates: dates,

            }));


    }, [year, month, days, startDay])

    // 2023-07-31-박미지 ------ 외부에서 캘린더 초기화 할 때 사용.
    const [isResetCalender, setIsResetCalender] = useRecoilState(resetCalenderStaste)

    useEffect(() => {
        moveToCurrentDate()
    }, [isResetCalender])




    useEffect(() => {
        setLastDate(() => (new Date(visibleDate.year, visibleDate.month, 0).getDate()));
        setStartDay(() => new Date(visibleDate.year, visibleDate.month - 1, 1).getDay())
        // console.log("시작요일과 마지막일 설정")
    }, [year, month])

    useEffect(() => {
        makeCalender();
        // console.log("달력만들기")
    }, [lastDate, startDay])




    // -----달력 만들기
    let newDates = []
    let newDays = []

    const makeCalender = () => {

        const lastDate = new Date(visibleDate.year, visibleDate.month, 0).getDate();
        const startDay = new Date(visibleDate.year, visibleDate.month - 1, 1).getDay();


        for (let i = 1; i <= lastDate; i++) {
            newDates.push(i)
            newDays.push(WEEKDAY[(i - 1 + startDay) % 7])
        }

        setDates(newDates);
        setDays(newDays);
        setIsResetCalender(false)

    }





    // --- 오늘 날짜로 이동
    const moveToCurrentDate = () => {

        setYear(currentDate.getFullYear())
        setMonth(('00' + (Number(currentDate.getMonth() + 1))).slice(-2))

    }






    // --- 이전 달로 이동
    const monthDown = () => {
        // console.log("monthDown")

        setMonth(month => ('00' + (Number(visibleDate.month) - 1)).slice(-2));
        if (month == '01') {
            setMonth(12)
            setYear(year => visibleDate.year - 1)
        }
    }

    // --- 다음 달로 이동
    function monthUp() {

        // setVisibleDate(
        //     prevState => ({
        //         ...prevState,
        //         month: ('00' + (Number(visibleDate.month) + 1)).slice(-2),
        //     }));



        // console.log("monthUp")
        // console.log(Number(visibleDate.month))
        setMonth(('00' + (Number(visibleDate.month) + 1)).slice(-2));
        if (month == 12) {
            setMonth('01')
            // setVisibleDate(
            //     prevState => ({
            //         ...prevState,
            //         year: visibleDate.year + 1,
            //         month: '01',
            //     }));


            setYear(year => visibleDate.year + 1)
        }
    }







    return (
        <YearDateBoxUI

            visibleDate={visibleDate}
            moveToCurrentDate={moveToCurrentDate}
            monthDown={monthDown}
            monthUp={monthUp}

        />
    )

}