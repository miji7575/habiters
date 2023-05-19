import { useState, useEffect, useCallback } from "react"
import { useRecoilState, useRecoilValue, atom } from 'recoil';
import MonthlyHabitTrackerUI from "./MonthlyHabit.presenter"
import AddNewHabitPopup from './addnewHabitPopup/AddNewHabitPopup';
import UpdateHabitPopup from './update-habit-popup/UpdateHabitPopup';
import DeleteHabitPopup from './delete-habit-popup/DeleteHabitpopup';

import { newInputValueState, userHabitState } from '../../../commons/stores/Stores';



export default function MonthlyHabitTracker(props) {


    const [habits, setHabits] = useRecoilState(userHabitState)




    // --- 습관 추가하기
    const [isaddNewHabitPopupOn, setIsaddNewHabitPopupOn] = useState(false)

    function addNewHabitPopupOn() {
        setIsaddNewHabitPopupOn(true)
    }
    function addNewHabitPopupClose() {
        setIsaddNewHabitPopupOn(false)
    }



    const [habitId, setHabitId] = useState()
    const [selectedHabitName, setSelectedHabitName] = useState()

    // --- 습관이름 수정하기
    const [isUpdateHabitPopupOn, setIsUpdateHabitPopupOn] = useState(false)

    function updateHabitPopupOn(habitId, habitname) {
        setHabitId(() => habitId)
        setSelectedHabitName(() => habitname)
        setIsUpdateHabitPopupOn(true);
    }
    function updateHabitPopupClose() {
        setIsUpdateHabitPopupOn(false)
    }


    // --- 습관 삭제하기
    const [isDeleteHabitPopupOn, setIsDeleteHabitPopupOn] = useState(false);

    function deleteHabitPopupOn(habitId) {
        setHabitId(() => habitId)
        setIsDeleteHabitPopupOn(true)
    }
    function deleteHabitPopupClose() {
        setIsDeleteHabitPopupOn(false)
    }




    // ----습관이 없을 때
    const [isHabitNull, setIsHabitNull] = useState(false)

    useEffect(() => {
        if (habits.length === 0) {
            setIsHabitNull(true)
        }
        else {
            setIsHabitNull(false)
        }

    }, [habits])




    // --- 날짜 선택
    const todayDate = new Date()
    const [year, setYear] = useState(todayDate.getFullYear());
    const [month, setMonth] = useState(todayDate.getMonth() + 1);
    const [date, setDate] = useState(todayDate.getDate());
    const today = year + "-" + month + "-" + date;




    const [selectedDate, setSelectedDate] = useState(today)

  



    const dateSelect = (date) => {
        setDate(date)
    }

  



    return (
        <>



            <MonthlyHabitTrackerUI
                addNewHabitPopupOn={addNewHabitPopupOn}
                updateHabitPopupOn={updateHabitPopupOn}
                deleteHabitPopupOn={deleteHabitPopupOn}

                
                showDate={props.showDate}
                monthDown={props.monthDown}
                monthUp={props.monthUp}

                habits={habits}
                setHabits={setHabits}
                isHabitNull={isHabitNull}


                selected={dateSelect}
                selectedDate={selectedDate}





                getUserHabit={props.getUserHabit}
            />



            {isaddNewHabitPopupOn && <AddNewHabitPopup
                addNewHabitPopupClose={addNewHabitPopupClose}
                getUserHabit={props.getUserHabit}
            />}

            {isUpdateHabitPopupOn && <UpdateHabitPopup
                updateHabitPopupClose={updateHabitPopupClose}
                selectedHabitName={selectedHabitName}
                habitId={habitId}
                getUserHabit={props.getUserHabit}
            />}

            {isDeleteHabitPopupOn && <DeleteHabitPopup
                deleteHabitPopupClose={deleteHabitPopupClose}
                habitId={habitId}
                getUserHabit={props.getUserHabit}
            />}
        </>


    )

}