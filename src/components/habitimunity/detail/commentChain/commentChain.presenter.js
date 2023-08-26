import {
    CommentChainWrap,
    CommentWrap, CommentContent, CommentInfoWrap, CommentInfoLeft, CommentInfoRight,
    CommentReplyWrap, CommentReplyContentWrap,
    IconReply, IconLikeBefore, IconLikeAfter, IconCommunication

} from './commentChain.styles';
import CommentInput from '../commentInput/commentInput.container';
import CommentReplyInput from '../commentReplyInput/commentReplyInput.container';
import CommentReply from '../commentReply/commentReply.container';
import { useEffect, useState } from 'react';
import ActionList from '../../commons/actionList';


export default function CommentChainUI(props) {




    const IconLike = (props) => {
        // console.log(props.commentEmojisData? props.commentEmojisData : '')

        const [like, setLike] = useState(false)

        useEffect(() => {
            props.commentEmojisData.map((data) => {
                if (data.memberId === props.user.id) {
                    setLike(true)
                }
            })

        }, [props.commentEmojisData])


        return (
            <>
                {!like && <IconLikeBefore onClick={() => { props.emojiClickHandler(like, "SMILE") }} />}
                {like && <IconLikeAfter onClick={() => { props.emojiClickHandler(like, "SMILE") }} />}
            </>

        )
    }




    return (
        <>
            <CommentChainWrap>
                {!props.isEditingComment ?
                    <>
                        {/* 댓글 기존 UI */}
                        <CommentWrap
                            isEditingComment={props.isEditingComment}>
                            <ActionList
                                type={"editAndDelete"}
                                onFirstActionClick={props.startCommentEditing}
                                onSecondActionClick={props.deleteComment} //삭제 함수 추가해야함
                            />

                            <CommentContent>
                                {props.commentData.content}
                            </CommentContent>
                            <CommentInfoWrap>
                                <CommentInfoLeft>
                                    <div>해비터{props.commentDataFIX.writerId}</div>
                                    <div>{props.commentData.createDate}</div>
                                </CommentInfoLeft>
                                <CommentInfoRight>
                                    <div>
                                        <IconLike
                                            commentEmojisData={props.commentEmojisData}
                                            user={props.user}
                                            emojiClickHandler={props.emojiClickHandler}
                                        />
                                        <div>{props.commentEmojisData.length}</div>
                                    </div>
                                    <div>
                                        <IconCommunication />
                                        <div>답글</div>
                                    </div>

                                </CommentInfoRight>
                            </CommentInfoWrap>


                        </CommentWrap>
                    </> :
                    <>
                        {/* 댓글 수정 UI */}
                        <CommentInput
                            boardId={props.boardId}
                            getBoardDatails={props.getBoardDatails}
                            name={`${props.commentData.id}Comment`}
                            previousComment={props.commentData.content}
                            isEditingComment={props.isEditingComment}
                            commentData={props.commentData}
                            finishCommentEditing={props.finishCommentEditing}

                        />

                    </>

                }

                {props.commentReplyData ? props.commentReplyData.map((data, index) =>
                    // 답글 기본 UI
                    <CommentReply
                        key={index}
                        index={index}
                        commentReplyData={data}
                        boardId={props.boardId}
                        commentId={props.commentData.id}
                        commentReplyLength={props.commentReplyLength}
                        getBoardDatails={props.getBoardDatails}
                        getCommentReplyData={props.getCommentReplyData}
                    />

                ) : <></>}
                {/*  답글 작성 UI */}
                <CommentReplyInput
                    name={`${props.commentData.id}NewCommentReply`}
                    boardId={props.boardId}
                    commentId={props.commentData.id}
                    backgroundColor={props.commentReplyLength}
                    isEditingCommentReply={props.isEditingCommentReply}
                    getBoardDatails={props.getBoardDatails}
                    getCommentReplyData={props.getCommentReplyData}

                />
            </CommentChainWrap>

        </>
    )
}