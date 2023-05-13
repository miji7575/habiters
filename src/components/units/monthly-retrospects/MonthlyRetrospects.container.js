import axios from 'axios';
import { useRecoilState } from "recoil";
import MonthlyRetrospectsUI from "./MonthlyRetrospects.presenter"
import { useEffect } from 'react';
import { userRetrospectState, userState } from '../../../commons/stores/Stores';



export default function MonthlyRetrospects(props) {

    // 로직을 여기다 담아라
    // const data = {
    //     "retrospects":[
    //     {
    //         "regDate": "2023-05-06",
    //         "regNumber": "1",
    //         "content": "1번게시물."
    //     },
    //     {
    //         "regDate": "2023-05-09",
    //         "regNumber": "2",
    //         "content": "2번게시물."
    //     },
    //     {
    //         "regDate": "2023-05-13",
    //         "regNumber": "3",
    //         "content": "3번게시물."
    //     },
    //     {
    //         "regDate": "2023-05-18",
    //         "regNumber": "4",
    //         "content": "4번게시물.\n길이가 길어졌다길이가 길어졌다길이   길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이"
    //     },
    //     {
    //         "regDate": "2023-05-20",
    //         "regNumber": "5",
    //         "content": "5번게시물.\n길이가 길어졌다길이가 길어졌다길이   길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이ㅍ가 길어졌다길이가 길어졌다"
    //     }
    // ]
    // }



    // 로직을 여기다 담아라
    // ----- Retrospect Data 
    const [accessToken, setAccessToken] = useRecoilState(userState)
    const [userRetrospect, setUserRetrospect] = useRecoilState(userRetrospectState)

    const getUserRetrospects = async () => {
        if (accessToken) {

            console.log("토큰" + accessToken)
            console.log(props.showDate.showYear + '-' + props.showDate.showMonth)
            const URL = `http://223.130.162.40:8080/diaries`
            // ?date={Option:${props.showDate.showYear}-${props.showDate.showMonth}}
            const response = await axios.get(URL, 
                {
                    headers: { 'Access-Control-Allow-Origin': '*','Content-Type': 'text/plain', Authorization: 'Bearer ' + accessToken },
                }
            )

            console.log("getUserRetrospects 실행됨")

            setUserRetrospect(() => response.data.data)
        }

        console.log(userRetrospect)
        return
    }

    useEffect(() => {
        getUserRetrospects()
    }, [])




    return (
        <MonthlyRetrospectsUI
            showDate={props.showDate}
            monthDown={props.monthDown}
            monthUp={props.monthUp}


            getUserRetrospects={getUserRetrospects}
            userRetrospect={userRetrospect}
        />
    )

}