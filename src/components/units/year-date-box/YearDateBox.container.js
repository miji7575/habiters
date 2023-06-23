import { useRecoilState } from "recoil"
import YearDateBoxUI from "./YearDateBox.presenter"
import { visibleDateState } from '../../stores';
import { useEffect, useState } from "react";


export default function YearDateBox(props) {

    // 로직을 여기다 담아라
    const [visibleDate, setVisibleDate] = useRecoilState(visibleDateState)
    const [prevMonth, setPrevMonth] = useState(visibleDate.month)

    const monthDown = () => {
        const aa = ('00' + (Number(prevMonth) - 1)).slice(-2)

        setPrevMonth(aa)




    }


    const monthUp = () => {

        // setVisibleDate(prevState => ({
        //     ...prevState,
        //     month: (('00' + (Number(month) + 1)).slice(-2))
        // }))
        // console.log(visibleDate.month)
    }

    useEffect(() => {
        const a = visibleDate.month
        console.log(a)
        setPrevMonth(a)
        // setVisibleDate(prevState => ({
        //     ...prevState,

        //     month: prevMonth,



        // }))
        console.log(prevMonth)

    },[visibleDate.month])

    return (
        <YearDateBoxUI
            // showDate={props.showDate}
            visibleDate={visibleDate}
            monthDown={monthDown}
            monthUp={monthUp}

        />
    )

}