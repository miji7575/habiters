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
                <CommentReplyInput placeholder={props.placeholder} />

                <SubmitButton>
                    <div>등록</div>
                </SubmitButton>


            </CommentReplyInputWrap>
            
        </>
    )
}