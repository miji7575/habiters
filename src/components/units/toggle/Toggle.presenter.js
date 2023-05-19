
import { ToggleBox } from './Toggle.styles'


export default function MyHabitToggleUI(props) {




    return (
        // html 부분을 여기에 담아라
        <div>

            <ToggleBox>
                <div className="a-tab-box headline5 ">

                    <input type="radio" id="트래커" name="tabs" checked={props.monthlyHabitTrackerChecked} hidden />
                    <label HTMLfor="트래커"
                    onClick={props.MonthlyHabitTrackerOn}>
                        <div className="a-tab-content" >월간 해빗 트래커</div>
                    </label>

                    <input type="radio" id="회고" name="tabs" checked={props.monthlyRetrospectsChecked} hidden />
                    <label HTMLfor="회고"
                     onClick={props.MonthlyRetrospectsOn}>
                        <div className="a-tab-content">월간 회고</div>
                    </label>

                </div>
            </ToggleBox>
        </div>
    )

}