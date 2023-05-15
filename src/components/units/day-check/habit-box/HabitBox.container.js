import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import axios from 'axios';
import HabitBoxUI from "./HabitBox.presenter"
import {SelectedDate, userState} from '../../../../commons/stores/Stores';




export default function HabitBox(props) {

     // ============================== Function ==============================

    //  ----- Axios post
    const [accessToken, setAccessToken] = useRecoilState(userState)

    const postHabitCheck = async () => {

        if (accessToken) {
            const response = await axios.post(`https://api.habiters.store/habits/${props.habitId}/check`, props.habitId, {
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            console.log(response)
            console.log("해빗체크됨")
            return

        }
    }

    //  ----- Axios delete
    const deleteHabitCheck = async () => {

        if (accessToken) {
            const response = await axios.delete(`https://api.habiters.store/habits/${props.habitId}/check`, {
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            console.log(response)
            console.log("해빗체크삭제됨")
            return

        }
    }

    const onHabitCheckClick = async() => {
        console.log(props.habitId)
        if(isHabitChecked) {
            await deleteHabitCheck()
            props.getUserData()
            // setIsCheckboxChecked(false)

            return
        }
        await postHabitCheck()
        props.getUserData()

        return

    }
   
    const colorArray = ['var(--color-purple4)', 'var(--color-skyblue4)', 'var(--color-green4)']
    const btnColorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']


    const [isHabitChecked, setIsHabitChecked] = useState(false)
    const [nowSelectedDate, setNowSelectedDate] = useRecoilState(SelectedDate)
    // console.log(nowSelectedDate)

    const year = props.showDate.showYear;
    
   



    



     // --- check된 날짜에만 색칠
     const habitColoring = async () => {

        if (nowSelectedDate.toString().length == 1) {
            setNowSelectedDate("0" + nowSelectedDate)
        }

        Object.entries(props.habitChecks).map(([key, value]) => {
            if (value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + nowSelectedDate)) {
                setIsHabitChecked(true)
            }
            else {
                setIsHabitChecked(false)
            }
        })
    }

    useEffect(()=>{
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