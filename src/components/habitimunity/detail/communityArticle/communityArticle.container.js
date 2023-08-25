import { useEffect, useState } from 'react';
import CommunityArticleUI from './communityArticle.presenter';

export default function CommunityArticle(props) {

    // const [content, setContent] = useState(boardDetailData.content)
    // const [createDate, setCreateDate] = useState(boardDetailData.createDate)
    // const [memberId, setMemberId] = useState(boardDetailData.memberId)
    // const [title, setTitle] = useState(boardDetailData.title)
    // const [updateDate, setUpdateDate] = useState(boardDetailData.updateDate)
    // const [views, setViews] = useState(boardDetailData.views)




    // --- 게시글 상세
    const [boardDetailData, setBoardDetailData] = useState('')
    useEffect(() => {
        setBoardDetailData(() => props.boardDetailData)
    }, [props.boardDetailData])



    // --- 댓글
    const [commentsLength, setCommentsLength] = useState('')
    useEffect(() => {
        if (boardDetailData.comments) {
            setCommentsLength(() => boardDetailData.comments.length)
        } else {
            setCommentsLength(0)
        }
    }, [boardDetailData])



    // -- 이모지
    const [emojiData, setEmojoData] = useState({
        smile: 0,
        sad: 0,
        surprised: 0,
        angry: 0
    })



    const countEmojiByType = () => {
        let countSmile = 0
        let countSad = 0
        let countSurprised = 0
        let countAngry = 0

        boardDetailData.emojis.map((data) => {

            switch (data.type) {
                case "SMILE":
                    countSmile++
                    break;
                case "SAD":
                    countSad++
                    break;
                case "SURPRISED":
                    countSurprised++
                    break;
                case "ANGRY":
                    countAngry++
                    break;
            }
        })
        // setEmojoData((prevState) => ({ ...prevState, ["smile"]: SMILE }))
        // setEmojoData((prevState) => ({ ...prevState, ["sad"]: SAD }))
        // setEmojoData((prevState) => ({ ...prevState, ["surprised"]: SURPRISED }))
        // setEmojoData((prevState) => ({ ...prevState, ["angry"]: ANGRY }))
        setEmojoData({
            smile: countSmile,
            sad: countSad,
            surprised: countSurprised,
            angry: countAngry
        })

    }

    useEffect(() => {
        if (boardDetailData.emojis) {
            countEmojiByType()
        }
    }, [boardDetailData.emojis])









    // 2023/08/18 박미지 ----- 카테고리 색상과 이름 정의 
    const [category, setCategory] = useState({
        text: '',
        color: ''
    })

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

    useEffect(() => {
        setCategoryTextAndColor()
    }, [boardDetailData])



    return (
        <>
            <CommunityArticleUI
                boardId={props.boardId}
                data={props.boardDetailData}
                category={category}
                commentsLength={commentsLength}
                emojiData={emojiData}
                getBoardDatails={props.getBoardDatails}
            />
        </>
    )
}