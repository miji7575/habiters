import { useEffect, useState } from "react"
import RetrospectUI from "./Retrospect.presenter"



export default function Retrospect(props) {


    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    console.log(new Date(props.date))


    return (
        <RetrospectUI
            date={new Date(props.date).getDate()}
            day={WEEKDAY[new Date(props.date).getDay()]}
            content={props.content}
        />
    )

}