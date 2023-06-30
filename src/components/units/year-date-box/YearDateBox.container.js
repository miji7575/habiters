import { useRecoilState } from "recoil"
import YearDateBoxUI from "./YearDateBox.presenter"
import { visibleDateState } from '../../stores';
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

    let newDates = []
    let newDays = []




    useEffect(() => {

        setVisibleDate(
            prevState => ({
                ...prevState,
                year: year,
                month: month,
                days: days,
                dates: dates,

            }));



    }, [year, month, days, startDay,])



    useEffect(() => {
        setLastDate(() => (new Date(year, month, 0).getDate()));
        setStartDay(() => new Date(year, month - 1, 1).getDay())
    }, [year, month])

    useEffect(() => {
        makeCalender();
    }, [lastDate, startDay])




    // -----달력 만들기
    const makeCalender = () => {

        const lastDate = new Date(year, month, 0).getDate();
        const startDay = new Date(year, month - 1, 1).getDay();


        for (let i = 1; i <= lastDate; i++) {
            newDates.push(i)
            newDays.push(WEEKDAY[(i - 1 + startDay) % 7])
        }
        setDates(newDates);
        setDays(newDays);

    }

    // const resetCalender = () => {
    //     setYear(currentDate.getFullYear())
    //     setMonth(currentDate.toJSON().substring(5, 7))
    // }



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







    return (
        <YearDateBoxUI
            visibleDate={visibleDate}
            monthDown={monthDown}
            monthUp={monthUp}

        />
    )

}