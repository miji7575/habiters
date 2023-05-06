import YearDateBoxUI from "./YearDateBox.presenter"



export default function YearDateBox(props) {

    // 로직을 여기다 담아라




    return (
        <YearDateBoxUI 
        showDate={props.showDate}
        monthDown={props.monthDown}
        monthUp={props.monthUp}
        />
    )

}