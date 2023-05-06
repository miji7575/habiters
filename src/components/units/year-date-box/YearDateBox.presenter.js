
import { DateBox, ArrowLeft, ArrowRight} from './YearDateBox.styles'


export default function YearDateBoxUI(props) {




    return (
        // html 부분을 여기에 담아라
        <>

            <DateBox>
                <ArrowLeft 
                onClick={props.monthDown}/>
                <span className="headline4"><span>{props.showDate.showYear}</span>.<span>{props.showDate.showMonth}</span></span>
                <ArrowRight 
                onClick={props.monthUp}/>
            </DateBox>
        </>
    )

}