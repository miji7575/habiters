import { useEffect, useState } from 'react';
import CommentReplyUI from './commentReply.presenter';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userAccessToken } from '../../../stores';

export default function CommentReply(props) {

    useEffect(() => {
        // console.log(props.value)
    })

    // 더 와야하는 데이터
    const commentDataFIX = {
        writerId: "33",
        like: 50,
    }
    const [accessToken, setAccessToken] = useRecoilState(userAccessToken)
    const [commentData, setCommentData] = useState(props.value)
    const [commentLength, setCommentLength] = useState(0)




    // 답글 수정UI
    const [isEditingCommentReply, setIsEditingCommentReply] = useState(false);
    const startCommentReplyEditing = () => {
        setIsEditingCommentReply(true);
    };
    const finishCommentReplyEditing = () => {
        setIsEditingCommentReply(false);
    };






    //2023-08-19 박미지 --- 답글 삭제
    const deleteCommentReply = async () => {

        console.log(`${props.commentId}번 댓글의 ${props.commentReplyData.id}번 답글 삭제`)
        
        // if (accessToken && props.boardId && commentData.id) {

        //     const response = await axios.delete(`https://api.habiters.store/posts/${props.boardId}/comment/${commentData.id}`, {
        //         headers: {
        //             "Content-Type": "application/json;charset=UTF-8",
        //             Authorization: `Bearer ${accessToken}`
        //         }
        //     })

        //     return
        // }.then(async ()=>{
            // props.getCommentReplyData()
        // })

    }
    useEffect(() => {
        // console.log(props.commentReplyData)
    })

    return (
        <>
            <CommentReplyUI
                boardId={props.boardId}
                // ----- 댓글
                commentId={props.commentId}
                // -----  답글
                // 답글 Data
                commentReplyData={props.commentReplyData}
                commentReplyLength={props.commentReplyLength}
                // 답글 수정 UI
                isEditingCommentReply={isEditingCommentReply}
                startCommentReplyEditing={startCommentReplyEditing}
                finishCommentReplyEditing={finishCommentReplyEditing}
                //답글 삭제
                deleteCommentReply={deleteCommentReply}
                // 기타
                index={props.index}
                getBoardDatails={props.getBoardDatails}
                getCommentReplyData={props.getCommentReplyData}


            />


        </>
    )
}