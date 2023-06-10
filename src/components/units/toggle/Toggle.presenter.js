
import { ToggleContainer, ToggleBox, ToggleBtn, Test } from './Toggle.styles'


export default function MyHabitToggleUI(props) {




    return (
        // html 부분을 여기에 담아라
        <div>

            <ToggleContainer>
                <ToggleBox className="headline5 ">

                    {/* <input type="radio" id="트래커" name="tabs" checked={props.monthlyHabitTrackerChecked} hidden />
                    <label HTMLfor="트래커"
                        onClick={props.MonthlyHabitTrackerOn}>

                    </label> */}
                    <Test
                     monthlyHabitTrackerChecked={props.monthlyHabitTrackerChecked}
                     monthlyRetrospectsChecked={props.monthlyRetrospectsChecked}
                     ></Test>

                    <ToggleBtn
                        onClick={props.MonthlyHabitTrackerOn}
                        monthlyHabitTrackerChecked={props.monthlyHabitTrackerChecked}>
                        월간 해빗 트래커
                    </ToggleBtn>

                    {/* <input type="radio" id="회고" name="tabs" checked={props.monthlyRetrospectsChecked} hidden />
                    <label HTMLfor="회고"
                        onClick={props.MonthlyRetrospectsOn}>
                        <div className="a-tab-content">월간 회고</div>
                    </label> */}

                    <ToggleBtn
                        onClick={props.MonthlyRetrospectsOn}
                        monthlyRetrospectsChecked={props.monthlyRetrospectsChecked}>
                        월간 회고
                    </ToggleBtn>

                </ToggleBox>
            </ToggleContainer>
        </div>
    )

}