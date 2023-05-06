import MonthlyRetrospectsUI from "./MonthlyRetrospects.presenter"



export default function MonthlyRetrospects(props) {

    // 로직을 여기다 담아라
    const data = {
        "retrospects":[
        {
            "regDate": "2023-05-06",
            "regNumber": "1",
            "content": "1번게시물."
        },
        {
            "regDate": "2023-05-09",
            "regNumber": "2",
            "content": "2번게시물."
        },
        {
            "regDate": "2023-05-13",
            "regNumber": "3",
            "content": "3번게시물."
        },
        {
            "regDate": "2023-05-18",
            "regNumber": "4",
            "content": "4번게시물.\n길이가 길어졌다길이가 길어졌다길이   길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이"
        },
        {
            "regDate": "2023-05-20",
            "regNumber": "5",
            "content": "5번게시물.\n길이가 길어졌다길이가 길어졌다길이   길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 \n길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이 길어졌다길이ㅍ가 길어졌다길이가 길어졌다"
        }]
    }




    return (
        <MonthlyRetrospectsUI
            showDate={props.showDate}
            monthDown={props.monthDown}
            monthUp={props.monthUp}
            data={data}
        />
    )

}