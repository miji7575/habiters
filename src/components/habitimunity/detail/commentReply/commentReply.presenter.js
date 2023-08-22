import {
    CommentContent, CommentInfoWrap, CommentInfoLeft, CommentInfoRight,
    CommentReplyWrap, CommentReplyContentWrap,
    IconReply, IconLikeBefore, IconLikeAfter, IconCommunication

} from './commentReply.styles';
import CommentReplyInput from '../commentReplyInput/commentReplyInput.container';
import { useState } from 'react';
import ActionList from '../../commons/actionList';
export default function CommentReplyUI(props) {




    const IconLike = () => {

        const [like, setLike] = useState(false)
        return (
            <>
                {!like && <IconLikeBefore onClick={() => { setLike(!like) }} />}
                {like && <IconLikeAfter onClick={() => { setLike(!like) }} />}
            </>

        )
    }


    return (
        <>
            {!props.isEditingCommentReply ?

                // 답글 기존 UI 
                <CommentReplyWrap
                    index={props.index}
                >
                    <ActionList
                        type={"editAndDelete"}
                        onFirstActionClick={props.startCommentReplyEditing}// 대댓글 수정 UI
                        onSecondActionClick={() => (props.deleteCommentReply())} //대댓글 삭제 함수 추가해야함
                    />
                    <IconReply />
                    <CommentReplyContentWrap>

                        <CommentContent>
                            {props.commentReplyData.content}
                        </CommentContent>
                        <CommentInfoWrap>
                            <CommentInfoLeft>
                                <div>해비터
                                    {/* {data.writerId} */}
                                </div>
                                <div>{props.commentReplyData.createDate}</div>
                            </CommentInfoLeft>
                            <CommentInfoRight>
                                <div>
                                    <IconLike />
                                    {/* <div>{data.like}</div> */}
                                </div>
                                <div>
                                    <IconCommunication />
                                    <div>답글</div>
                                </div>

                            </CommentInfoRight>


                        </CommentInfoWrap>
                    </CommentReplyContentWrap>

                </CommentReplyWrap>

                :

                ///* 답글 수정 UI */
                <CommentReplyInput
                    boardId={props.boardId}
                    commentId={props.commentId}
                    commentReplyData={props.commentReplyData}
                    name={`${props.commentReplyData.id}CommentReply`}
                    previousCommentReply={props.commentReplyData.content}
                    backgroundColor={props.index}
                    isEditingCommentReply={props.isEditingCommentReply}
                    finishCommentReplyEditing={props.finishCommentReplyEditing}
                    getBoardDatails={props.getBoardDatails}
                    getCommentReplyData={props.getCommentReplyData}
                />


            }

        </>
    )
}