import { useEffect, useState } from 'react';
import CommunityArticleUI from './communityArticle.presenter';

export default function CommunityArticle(props) {


    const [boardDetailData, setBoardDetailData] = useState('')

    useEffect(() => {
        // setSelectedValue((prevState)=>({ ...prevState, [props.name]: selectedAMPM }))

        setBoardDetailData(()=>props.boardDetailData)
        setCommentsLength(()=>{boardDetailData.comments ? boardDetailData.comments.length : ''})
    }, [props.boardDetailData])

    const [category, setCategory] = useState({
        text: '',
        color: ''
    })
    const [commentsLength, setCommentsLength] = useState('')
    // const [content, setContent] = useState(boardDetailData.content)
    // const [createDate, setCreateDate] = useState(boardDetailData.createDate)
    // const [emojis, setEmojis] = useState(boardDetailData.emojis)
    // const [memberId, setMemberId] = useState(boardDetailData.memberId)
    // const [title, setTitle] = useState(boardDetailData.title)
    // const [updateDate, setUpdateDate] = useState(boardDetailData.updateDate)
    // const [views, setViews] = useState(boardDetailData.views)



    // 2023/08/18 박미지 ----- 카테고리 색상과 이름 정의 
    useEffect(() => {
        setCategoryTextAndColor()
    }, [boardDetailData])

    const setCategoryTextAndColor = () => {
        switch (boardDetailData.category) {
            case "STUDY":
                setCategory({
                    text: "공부",
                    color: "orange"
                })
                break;
            case "EXERCISE":
                setCategory({
                    text: "운동",
                    color: "skyBlue"
                })
                break;
            case "HEALTH":
                setCategory({
                    text: "건강",
                    color: "green"
                })
                break;
            case "DAILY":
                setCategory({
                    text: "일상",
                    color: "purple"
                })
                break;
            case "ETC":
                setCategory({
                    text: "기타",
                    color: "gray"
                })
                break;
            default:
                setCategory({
                    text: "",
                    color: ""
                })
        }
    }





    return (
        <>
            <CommunityArticleUI
                data={props.boardDetailData}
                category={category}
                commentsLength={commentsLength} />
        </>
    )
}