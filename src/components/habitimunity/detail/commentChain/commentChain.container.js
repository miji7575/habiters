import { useEffect, useState } from 'react';
import CommentChainUI from './commentChain.presenter';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userAccessToken, userDetail } from '../../../stores';

export default function CommentChain(props) {

    useEffect(() => {
        // console.log(props.commentData)
    })

    // 더 와야하는 데이터
    const commentDataFIX = {
        writerId: "33",
        like: 50,
    }
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [user, setUser] = useRecoilState(userDetail)
    const [commentData, setCommentData] = useState(props.commentData)
    const [commentLength, setCommentLength] = useState(0)
    const [commentReplyData, setCommentReplyData] = useState('')



    //2023-08-19 박미지 --- 댓글에 대한 답글List 불러오기
    const getCommentReplyData = async () => {


        if (accessToken && props.boardId && commentData.id) {

            const response = await axios.get(`https://api.habiters.store/posts/${props.boardId}/comments/${commentData.id}/reply`, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Authorization: `Bearer ${accessToken}`
                }
            })

            setCommentLength(response.data.data ? response.data.data.length : "")
            setCommentReplyData(response.data.data)


            return
        }

    }

    useEffect(() => {
        getCommentReplyData()
    }, [])


    useEffect(() => {
        setCommentData(props.commentData)
    }, [props.commentData])


    // 댓글 수정UI
    const [isEditingComment, setIsEditingComment] = useState(false);
    const startCommentEditing = () => {
        setIsEditingComment(true);
    };
    const finishCommentEditing = () => {
        setIsEditingComment(false);
    };







    //2023-08-19 박미지 --- 댓글 삭제
    const deleteComment = async () => {

        console.log(`${commentData.id}번 댓글삭제`)
        if (accessToken && props.boardId && commentData.id) {

            const response = await axios.delete(`https://api.habiters.store/posts/${props.boardId}/comments/${commentData.id}`, {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    Authorization: `Bearer ${accessToken}`
                }
            })
            // .then(() => {
            //     props.getBoardComments()
            // })
            props.getBoardDatails()
            console.log(response)

            return
        }

    }

    // ====== Emojis


    const [commentEmojisData, setCommentEmojisData] = useState(commentData.emojis)

    useEffect(() => {
        setCommentEmojisData(commentData.emojis)
    },[commentData])



    //2023-08-24 박미지 --- 댓글 좋아요 이모지 동륵 / 취소

    const emojiClickHandler = async (like, emojiType) => {
        // console.log("호출됨" + like)
        switch (like) {


            case false:
                console.log("이모지 좋아요 누르기 , Like는 지금 " + like)
                console.log(commentData.id)
                const response = await axios.put(`https://api.habiters.store/comment/${commentData.id}/emojis?type=${emojiType}`, {
                    "emojiType": emojiType,
                    // "memberId": user.id,
                    // "domain": "COMMENT",
                    // "domainId": commentData.id
                }, {
                    headers: { "Content-Type": "application/json;charset=UTF-8", Authorization: 'Bearer ' + accessToken }
                })
                props.getBoardDatails()
                console.log(response)

                break;

            case true:
                console.log("이모지 좋아요 취소 , Like는 지금 " + like)
                console.log(accessToken)
                const responseDelete = await axios.delete(`https://api.habiters.store/comment/${commentData.id}/emojis`, {
                    headers: { "Content-Type": "application/json;charset=UTF-8", Authorization: 'Bearer ' + accessToken }
                })
                props.getBoardDatails()
                console.log(responseDelete)

                break;
        }


    }


    return (
        <>
            <CommentChainUI
                boardId={props.boardId}
                // ----- 댓글
                getBoardDatails={props.getBoardDatails}
                getCommentReplyData={getCommentReplyData}
                // 댓글Data
                commentData={commentData}
                commentDataFIX={commentDataFIX}// 더 필요한 데이터 아직 안옴
                // 댓글 수정 UI
                isEditingComment={isEditingComment}
                startCommentEditing={startCommentEditing}
                finishCommentEditing={finishCommentEditing}
                //댓글 삭제
                deleteComment={deleteComment}
                // -----  답글
                // 답글Data
                commentReplyData={commentReplyData}
                commentReplyLength={commentLength}
                // 댓글/답글 Emoji
                emojiClickHandler={emojiClickHandler}
                commentEmojisData={commentEmojisData}
                user={user}



            />


        </>
    )
}