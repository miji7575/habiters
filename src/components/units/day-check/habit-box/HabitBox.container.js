import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import axios from 'axios';
import HabitBoxUI from "./HabitBox.presenter"
import { SelectedDate, userState, userHabitState } from '../../../../components/stores';




export default function HabitBox(props) {

    // 로직을 여기다 담아라
    const todayYear = new Date().getFullYear()
    const todayMonth = new Date().getMonth() + 1
    const todayDate = new Date().getDate()
    const today = todayYear + "-" + ("00" + (Number(todayMonth))).slice(-2) + "-" + todayDate;



    // ============================== Function ==============================




    //  ----- Axios post -- 오늘날짜의 선택한 Habit 체크
    const [accessToken, setAccessToken] = useRecoilState(userState)

    const postHabitCheck = async () => {
        const postDate = ("00" + (Number(todayMonth))).slice(-2) + "-" + ("00" + (Number(todayDate))).slice(-2)
        console.log("날짜"+todayDate)
        console.log("post 전체" + postDate)

        if (accessToken) {
            const response = await axios.post(`https://api.habiters.store/habits/${props.habitId}/check`,
                {
                    "habitId": props.habitId,
                    "requestDate": postDate
                }, {
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            // console.log(response)
            // console.log("해빗체크됨")
            return

        }
    }

    //  ----- Axios delete -- 오늘날짜의 선택한 Habit 체크해제
    const deleteHabitCheck = async () => {

        if (accessToken) {
            const response = await axios.delete(`https://api.habiters.store/habits/${habitcheckId}/uncheck`
                , {
                    'Content-Type': 'application/json',
                    headers: { Authorization: 'Bearer ' + accessToken },
                })
            // console.log(response)
            // console.log("해빗체크삭제됨")
            return response

        }
    }



    const onHabitCheckClick = async () => {
        // console.log(props.habitId)
        const month = (('00' + (Number(todayMonth))).slice(-2)); 
        if ((props.showDate.showYear + "-" + month + "-" + nowSelectedDate == today)) { //month => props.showDate.showMonth 날짜변경시 같이 변경, 현재는 오늘 습관만 체크
            // 체크해제하기
            if (isHabitChecked) {
                await deleteHabitCheck()
                await props.getUserHabit()
                // setIsHabitChecked(false)
                return
            }
            // 체크하기

            await postHabitCheck()
            props.getUserHabit()
            // setIsHabitChecked(true)

            return

        }
        else {
            alert("오늘의 습관만 체크할 수 있습니다.")
        }

    }

    const colorArray = ['var(--color-purple4)', 'var(--color-skyblue4)', 'var(--color-green4)']
    const btnColorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']


    const [isHabitChecked, setIsHabitChecked] = useState(false)
    const [nowSelectedDate, setNowSelectedDate] = useRecoilState(SelectedDate)


    const year = props.showDate.showYear;









    // --- check된 날짜에만 색칠
    // --------habitcheckId 얻기
    const [habitcheckId, setHabitcheckId] = useState()
    const habitColoring = async () => {

        const month = (('00' + (Number(todayMonth))).slice(-2)); 
        const date = (('00' + (Number(nowSelectedDate))).slice(-2));
        setIsHabitChecked(false)
        Object.entries(props.habitChecks).map(([key, value]) => {

          
           
            if (value.updatedAt.includes(year + "-" + month + "-" + date)) { //month => props.showDate.showMonth 날짜변경시 같이 변경
                setIsHabitChecked(true)
                setHabitcheckId(value.id)
                return
            }
            else {
                if((props.showDate.showYear + "-" + month + "-" + props.date == today)){ //month => props.showDate.showMonth 날짜변경시 같이 변경
                    setIsHabitChecked(false)
                }
                
            }
        })
    }


    const [habits, setHabits] = useRecoilState(userHabitState)
    useEffect(() => {
        habitColoring()
        
    })

    return (
        <HabitBoxUI
            name={props.name}
            index={props.index}
            colorArray={colorArray}
            btnColorArray={btnColorArray}

            showDate={props.showDate}
            nowSelectedDate={nowSelectedDate}
            isHabitChecked={isHabitChecked}

            onHabitCheckClick={onHabitCheckClick}
        />
    )

}