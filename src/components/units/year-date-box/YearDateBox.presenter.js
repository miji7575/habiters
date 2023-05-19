
import { DateBox, ArrowLeft, ArrowRight, Date} from './YearDateBox.styles'


export default function YearDateBoxUI(props) {




    return (
        // html 부분을 여기에 담아라
        <>

            <DateBox>
                <ArrowLeft 
                onClick={props.monthDown}/>
                <Date className="headline4"><span>{props.showDate.showYear}</span>.<span>{props.showDate.showMonth}</span></Date>
                <ArrowRight 
                onClick={props.monthUp}/>
            </DateBox>
        </>
    )

}