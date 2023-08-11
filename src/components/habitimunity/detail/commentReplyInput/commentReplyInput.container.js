import CommentReplyInputUI from './commentReplyInput.presenter';

export default function CommentReplyInput(props) {

    const placeholder = "답글 내용을 작성해주세요."


    return (
        <>
            <CommentReplyInputUI
            placeholder={placeholder}
            backgroundColor={props.backgroundColor}/>
        </>
    )
}