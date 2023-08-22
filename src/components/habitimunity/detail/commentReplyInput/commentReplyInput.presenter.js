import {
    CommentReplyInputWrap,
    CommentReplyInput,
    IconReply,
    SubmitButton
} from './commentReplyInput.styles';
export default function CommentReplyInputUI(props) {


    return (
        <>
            <CommentReplyInputWrap
                backgroundColor={props.backgroundColor}
            >
                <IconReply />
                <CommentReplyInput
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                />

                <SubmitButton
                    onClick={() => {{ props.isEditingCommentReply ? props.updateCommentReply() : props.postCommentReply() } }}>
                    <div>등록</div>
                </SubmitButton>


            </CommentReplyInputWrap>

        </>
    )
}