
import { DateBox, ArrowLeft, ArrowRight, Date} from './YearDateBox.styles'


export default function YearDateBoxUI(props) {




    return (
       
        <>
            <DateBox>
                <ArrowLeft 
                onClick={props.monthDown}/>
                <Date className="headline4"><span>{props.visibleDate.year}</span>.<span>{props.visibleDate.month}</span></Date>
                <ArrowRight 
                onClick={props.monthUp}/>
            </DateBox>
        </>
    )

}