import {
    CommentChainWrap,
    CommentWrap, CommentContent, CommentInfoWrap, CommentInfoLeft, CommentInfoRight,
    CommentReplyWrap, CommentReplyContentWrap,
    IconReply, IconLikeBefore, IconLikeAfter, IconCommunication

} from './commentChain.styles';
import CommentReplyInput from '../commentReplyInput/commentReplyInput.container';
import { useState } from 'react';
export default function CommentChainUI(props) {




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
            <CommentChainWrap>
                <CommentWrap>

                    <CommentContent>
                        {props.commentData.content}
                    </CommentContent>
                    <CommentInfoWrap>
                        <CommentInfoLeft>
                            <div>해비터{props.commentData.writerId}</div>
                            <div>{props.commentData.regDate}</div>
                        </CommentInfoLeft>
                        <CommentInfoRight>
                            <div>
                                <IconLike />
                                <div>{props.commentData.like}</div>
                            </div>
                            <div>
                                <IconCommunication />
                                <div>답글</div>
                            </div>

                        </CommentInfoRight>
                    </CommentInfoWrap>

                </CommentWrap>

                {props.commentReplyData.map((data, index) =>
                    <CommentReplyWrap
                        key={index}
                        index={index}>
                        <IconReply />
                        <CommentReplyContentWrap>

                            <CommentContent>
                                {data.content}
                            </CommentContent>
                            <CommentInfoWrap>
                                <CommentInfoLeft>
                                    <div>해비터{data.writerId}</div>
                                    <div>{data.regDate}</div>
                                </CommentInfoLeft>
                                <CommentInfoRight>
                                    <div>
                                        <IconLike />
                                        <div>{data.like}</div>
                                    </div>
                                    <div>
                                        <IconCommunication />
                                        <div>답글</div>
                                    </div>

                                </CommentInfoRight>


                            </CommentInfoWrap>
                        </CommentReplyContentWrap>

                    </CommentReplyWrap>)}

                <CommentReplyInput 
                    backgroundColor={props.commentReplyLength}
                />
            </CommentChainWrap>

        </>
    )
}