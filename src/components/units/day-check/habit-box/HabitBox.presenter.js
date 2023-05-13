
import { HabitCheck,HabitCheckBtn,HabitCheckPurPle, HabitCheckBlue, HabitCheckGreen, HabitCheckBtnPurple, HabitCheckBtnBlue, HabitCheckBtnGreen, HabitTitle } from './HabitBox.styles'


export default function HabitBoxUI(props) {




    return (
        // html 부분을 여기에 담아라
        <>

            <HabitCheck
            colorArray={props.colorArray}
            index={props.index}
            >
                <HabitTitle className="body2-bold">{props.name}</HabitTitle>
                <HabitCheckBtn 
                className="body3-medium"
                btnColorArray={props.btnColorArray}
                index={props.index}
                
                isHabitChecked={props.isHabitChecked}
                onClick={props.onHabitCheckClick}
                >
                    성공했어요{props.nowSelectedDate}
                </HabitCheckBtn>
            </HabitCheck>


            
        </>
    )

}