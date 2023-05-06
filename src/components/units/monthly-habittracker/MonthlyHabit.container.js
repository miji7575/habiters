import { useState, useEffect, useCallback } from "react"
import {useRecoilState, useRecoilValue ,atom} from 'recoil';
import MonthlyHabitTrackerUI from "./MonthlyHabit.presenter"
import AddNewHabitPopup from './addnewHabitPopup/AddNewHabitPopup';
import UpdateHabitPopup from './update-habit-popup/UpdateHabitPopup';
import DeleteHabitPopup from './delete-habit-popup/DeleteHabitpopup';

import {newInputValueState} from '../../../commons/stores/Stores';



export default function MonthlyHabitTracker(props) {



    const [habits, setHabits] = useState(["양치하기", "세수하기", "밥먹기", "만두만두", "다섯번째 습관", "여셧번째습관","추가된거"])
    // =========삭제========
    // const [newInputValue, setNewInputvalue] = useState('')
    let newHabitName = ''
    // const [newInput, setNewInput] = useRecoilValue(newInputValueState)
    // const [todoList, setTodoList] = useState([])
    // const addItem = () => {
        // useEffect(() => {
   
        //     // setNewInputvalue(newInputValue)
        //     // setHabit([...habits,inputValue])
        //     console.log(newInputValue)
            

        // }, [newInputValue,habits])


    // =========삭제========
    // console.log(newInputValue)


    //  습관 추가하기
    const [isaddNewHabitPopupOn, setIsaddNewHabitPopupOn] = useState(false)

    function addNewHabitPopupOn() {
        setIsaddNewHabitPopupOn(true)

    }
    function addNewHabitPopupClose() {
        setIsaddNewHabitPopupOn(false)
    }
    function addNewhabit (aaa) {
        newHabitName = aaa
        // console.log(newHabitName)

        if(newHabitName != '')
            setHabits(()=>[...habits,newHabitName])
        // =========삭제========
        addNewHabitPopupClose();
    }


    // 습관이름 수정하기
    const [isUpdateHabitPopupOn, setIsUpdateHabitPopupOn] = useState(false)

    function updateHabitPopupOn() {
        setIsUpdateHabitPopupOn(true);
    }
    function updateHabitPopupClose() {
        setIsUpdateHabitPopupOn(false)
    }
    function updateHabit() {
        updateHabitPopupClose();
    }


    // 습관 삭제하기
    const [isDeleteHabitPopupOn, setIsDeleteHabitPopupOn] = useState(false);

    function deleteHabitPopupOn() {
        setIsDeleteHabitPopupOn(true)
    }
    function deleteHabitPopupClose() {
        setIsDeleteHabitPopupOn(false)
    }
    function deleteHabit() {
        deleteHabitPopupClose();
    }









    return (
        <>
            {/* <div>{habits}</div>
            <div>{newHabitName}</div> */}


            <MonthlyHabitTrackerUI
                addNewHabitPopupOn={addNewHabitPopupOn}
                updateHabitPopupOn={updateHabitPopupOn}
                deleteHabitPopupOn={deleteHabitPopupOn}
                showDate={props.showDate}
                monthDown={props.monthDown}
                monthUp={props.monthUp}
                habits={habits}
                setHabits={setHabits}

            />



            {isaddNewHabitPopupOn && <AddNewHabitPopup
                addNewHabitPopupClose={addNewHabitPopupClose}
                addNewhabit={addNewhabit}
                // ==========삭제
                // setNewInputvalue={setNewInputvalue}
                //============삭제
            />}

            {isUpdateHabitPopupOn && <UpdateHabitPopup
                updateHabitPopupClose={updateHabitPopupClose}
                updateHabit={updateHabit}
            />}

            {isDeleteHabitPopupOn && <DeleteHabitPopup
                deleteHabitPopupClose={deleteHabitPopupClose}
                deleteHabit={deleteHabit}
            />}
        </>


    )

}