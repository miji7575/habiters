import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { RecoilRoot, useRecoilState, atom, useRecoilValue } from 'recoil';
import { userState, userHabitState } from '../../../../commons/stores/Stores';


// ============================== Style ==============================
const HabitCheckBoxContainer = styled.span`
height: 44px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
border-right: 1px solid var(--color-black8);
border-bottom: 1px solid var(--color-black8);
&:last-child{
    border-bottom: 1px solid var(--color-black8);
}
`
const HabitCheckBox = styled.span`
width: 24px;
height: 24px;
border-radius: 4px;
background-color: ${(props) => props.isCheckboxChecked === true ? props.colorArray[(props.index) % 3] : `var(--color-black9)`};
cursor: pointer;
`

export default function CalenderDayHabitCheckbox(props) {

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
            const response = await axios.delete(`https://api.habiters.store/habits/${props.habitId}/check`,{
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            console.log(response)
            console.log("해빗체크삭제됨")
            return response

        }
    }




    const colorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    const todayYear = new Date().getFullYear()
    const todayMonth = new Date().getMonth() + 1
    const todayDate = new Date().getDate()
    const today = todayYear+"-"+("00"+(Number(todayMonth))).slice(-2)+"-"+todayDate;

    const checkboxCheck = async () => {
        // console.log(props.showDate.showYear)
        // console.log(props.showDate.showMonth)
        // console.log(props.date)
        // console.log(today)
        // console.log(props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date)


        // if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date == today )) {


                                                                                                        // console.log(props.habitChecks.length)
                                                                                                        // if (props.habitChecks.length == 1) {
                                                                                                        //     await deleteHabitCheck()
                                                                                                        //     props.getUserData()
                                                                                                        //     return
                                                                                                        // }

                                                                                                        // if (props.habitChecks.length == 0) {
                                                                                                        //     await postHabitCheck()
                                                                                                        //     props.getUserData()
                                                                                                                                                                                          // }
            console.log(props.habitId)  
            if (isCheckboxChecked) {
                await deleteHabitCheck()
                props.getUserData()
                
                // setIsCheckboxChecked(false)

                return
            }
            await postHabitCheck()
            props.getUserData()

        //     return
        // }
        // else {
        //     alert("당일의 습관만 체크할 수 있습니다.")
        // }




    }


    // --- 날짜 형식 맞추기
    const year = props.showDate.showYear;
    const [date, setDate] = useState(props.date)
    if (date.toString().length == 1) {
        setDate("0" + date)
    }


    // --- check된 날짜에만 색칠
    const habitColoring = async () => {

        Object.entries(props.habitChecks).map(([key, value]) => {

            if (value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + date)) {
                setIsCheckboxChecked(()=>true)
                if(value.updatedAt.includes("2023-05-12")){
                    setIsCheckboxChecked(()=>true)
                    console.log("!!!!!2023-05-12!!!!!데이터값 : "+value.updatedAt)
                    console.log("!!!!!2023-05-12!!!!!!애들의 값 : "+year + "-" + props.showDate.showMonth + "-" + date)
                    console.log("!!!!2023-05-12!!!!!! : "+value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + date))
                    console.log("!!!!!!!2023-05-12!!!!!체크박스 색깔 여부 : "+isCheckboxChecked)
                }
                console.log("?????????데이터값 : "+value.updatedAt)
                    console.log("???????????????애들의 값 : "+year + "-" + props.showDate.showMonth + "-" + date)
                    console.log("????????????? : "+value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + date))
                    console.log("?????????????체크박스 색깔 여부 : "+isCheckboxChecked)
                
            }
            else {
                setIsCheckboxChecked(false)
                console.log("불꺼짐")
            }

        })
    }


    // ----색칠
    useEffect(() => {

        habitColoring();

    })


    // const [userHabit, setUserHabit] = useRecoilState(userHabitState)


    // ============================== Rendering ==============================
    return (
        <HabitCheckBoxContainer>
            <HabitCheckBox
                onClick={checkboxCheck}
                isCheckboxChecked={isCheckboxChecked}
                colorArray={colorArray}
                index={props.index}

            />
        </HabitCheckBoxContainer>

    )
}