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

/* 마지막 체크박스 컨테이너 */
&:last-of-type{
    border-bottom: ${(props) => props.isSelected === true ? '1px solid var(--color-black1)' : '1px solid var(--color-black8)'};  
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

    //  ----- Axios post -- 습관 체크하기
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const postHabitCheck = async () => {



        console.log(("00" + (Number(todayMonth))).slice(-2) + "-" + todayDate);
        // console.log(props.habitId)

        const postDate = ("00" + (Number(todayMonth))).slice(-2) + "-" + todayDate

        if (accessToken) {
            const response = await axios.post(`https://api.habiters.store/habits/${props.habitId}/check`, {
                "habitId": props.habitId,
                "requestDate": postDate
            }, {
                'Content-Type': 'application/json',
                headers: { Authorization: 'Bearer ' + accessToken }
            })
            // console.log(response)
            // console.log("해빗체크완료")
            return

        }
    }

    //  ----- Axios delete -- 습관 체크 해제하기
    const deleteHabitCheck = async () => {

        if (accessToken) {


            const response = await axios.delete(`https://api.habiters.store/habits/${habitcheckId}/uncheck`
                , {
                    'Content-Type': 'application/json',
                    headers: { Authorization: 'Bearer ' + accessToken },
                })
            // console.log(response)
            // console.log("해빗체크 삭제 완료")

            return

        }
    }




    const colorArray = ['var(--color-purple2)', 'var(--color-skyblue2)', 'var(--color-green2)']
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    const todayYear = new Date().getFullYear()
    const todayMonth = new Date().getMonth() + 1
    const todayDate = new Date().getDate()
    const today = todayYear + "-" + ("00" + (Number(todayMonth))).slice(-2) + "-" + todayDate;



    // ------ 체크박스 클릭
    const checkboxCheck = async () => {
        console.log(habitcheckId)



        if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date == today)) {



            if (isCheckboxChecked) {
                await deleteHabitCheck()
                props.getUserHabit()
                setIsCheckboxChecked(false)
                return
            }
            await postHabitCheck()
            props.getUserHabit()

            return
        }
        else {
            alert("당일의 습관만 체크할 수 있습니다.")
        }




    }


    // --- 날짜 형식 맞추기
    const year = props.showDate.showYear;
    const [date, setDate] = useState(props.date)
    if (date.toString().length == 1) {
        setDate("0" + date)
    }


    // --- check된 날짜에만 색칠
    const [habitcheckId, setHabitcheckId] = useState()
    const habitColoring = async () => {

        Object.entries(props.habitChecks).map(([key, value]) => {
            // console.log(value)

            if (value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + date)) {
                setHabitcheckId(value.id)
                setIsCheckboxChecked(() => true)
                return

            }
            else {
                if ((props.showDate.showYear + "-" + props.showDate.showMonth + "-" + props.date == today)) {
                    setIsCheckboxChecked(false)
                }
            }


        })
    }


    // ----색칠
    const [habits, setHabits] = useRecoilState(userHabitState)


    useEffect(() => {
        habitColoring()

    })

    useEffect(() => {

        setIsCheckboxChecked(false)
        // Object.entries(props.habitChecks).map(([key, value]) => {


        //     if (value.updatedAt.includes(year + "-" + props.showDate.showMonth + "-" + date)) {
        //         setHabitcheckId(value.id)
        //         setIsCheckboxChecked(() => true)
        //         return

        //     }

        // })
    }, [props.showDate.showMonth])







    // ============================== Rendering ==============================
    return (
        <HabitCheckBoxContainer
            isSelected={props.isSelected}>
            <HabitCheckBox
                onClick={checkboxCheck}
                isCheckboxChecked={isCheckboxChecked}
                colorArray={colorArray}
                index={props.index}

            />
        </HabitCheckBoxContainer>

    )
}