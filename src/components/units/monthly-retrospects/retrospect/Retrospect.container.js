import { useEffect, useState } from "react"
import RetrospectUI from "./Retrospect.presenter"
import axios from "axios";
import { useRecoilState } from "recoil";
import {userRetrospectState, userState} from '../../../../commons/stores/Stores';



export default function Retrospect(props) {


    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    console.log(new Date(props.date))



    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectState)
    const [accessToken, setAccessToken] = useRecoilState(userState)

    const deleteUserRetrospectData = async () => {

        console.log(props.contentId)
        if (accessToken) {
            const response = await axios.delete(`http://223.130.162.40:8080/diaries/${props.contentId}`, {
                headers: { Authorization: 'Bearer ' + accessToken }
            })

            console.log(response)
            return
        }

    }
 

    const deleteRetrospect = async() => {
        await deleteUserRetrospectData()
        props.getUserRetrospects()
    }

    return (
        <RetrospectUI
            date={new Date(props.date).getDate()}
            day={WEEKDAY[new Date(props.date).getDay()]}
            content={props.content}
            deleteRetrospect={deleteRetrospect}
            
        />
    )

}