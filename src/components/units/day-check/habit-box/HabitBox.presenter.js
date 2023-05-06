
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
                <HabitCheckBtn className="body3-medium"
                btnColorArray={props.btnColorArray}
                index={props.index}>
                    성공했어요
                </HabitCheckBtn>
            </HabitCheck>


            {/* <HabitCheckBlue>
                <HabitTitle className="body2-bold">습관 이름 최대 10자</HabitTitle>
                <HabitCheckBtnBlue className="body3-medium">
                    성공했어요
                </HabitCheckBtnBlue>
            </HabitCheckBlue>

            <HabitCheckGreen>
                <HabitTitle className="body2-bold">습관 이름 최대 10자</HabitTitle>
                <HabitCheckBtnGreen className=" body3-medium">
                    성공했어요
                </HabitCheckBtnGreen>
            </HabitCheckGreen> */}
        </>
    )

}