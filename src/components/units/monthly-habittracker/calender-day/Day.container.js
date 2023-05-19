import { useEffect, useState } from "react"
import CalenderDayUI from "./Day.presenter"
import { useRecoilState } from "recoil";
import {SelectedDate} from '../../../../commons/stores/Stores';



export default function CalenderDay(props) {

    const [isSelected, setIsSelected] = useState(false);
    const [nowSelectedDate, setNowSelectedDate] = useRecoilState(SelectedDate)


    const onClickDayHandler = async (e) => {
        // ----- 선택한 날짜 Recoil에 저장
        setNowSelectedDate(props.date)
        props.selected(props.date)
    }


    // ----- 최초 렌더링 오늘 날짜 선택됨
    useEffect(() => {
        console.log(props.selectedDate)

        if (props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date === props.selectedDate) {

            setIsSelected(true)
        }

    }, [])


    // ----- 선택한 날짜만 색깔
    useEffect(()=>{



            if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date === props.showDate.showYear + "-" + props.showDate.showMonth + "-" + nowSelectedDate)||
            (props.showDate.showYear + "-" + props.showDate.showMonth + "-0" + props.date === props.showDate.showYear + "-" + props.showDate.showMonth + "-" + nowSelectedDate)) {
                setIsSelected(true)
            }
            else{
                setIsSelected(false)
            }
       
        
    })

 






    return (


        <CalenderDayUI
            isSelected={isSelected}
            selected={props.selected}
            habits={props.habits}
            

            showDate={props.showDate}
            day={props.day}
            date={props.date}
            onClickDayHandler={onClickDayHandler} 
            
            
            
            getUserHabit={props.getUserHabit}
            />


    )

}