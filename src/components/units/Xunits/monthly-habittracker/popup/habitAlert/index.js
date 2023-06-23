import { useState } from 'react';
import Popup1BtnTextonly from '../../../../commons/popup/Popup1BtnTextonly';


export default function HabitAlertPopUp(props) {

    const [popUpTitle, setPopUpTitle] = useState(props.popUpTitle)
    const [popUpSubTitle, setPopUpSubTitle] = useState("")
    const [popUpBtnText, setPopUpBtnText] = useState("확인")



    return (
        <>
            <Popup1BtnTextonly 
                popUpTitle={popUpTitle}
                popUpSubTitle={popUpSubTitle}
                HabitAlertPopupClose={props.HabitAlertPopupClose}
                />
        </>
    )


}