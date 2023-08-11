import CommentInputUI from './commentInput.presenter';

export default function CommentInput(props) {

    const placeholder = "댓글을 작성해주세요."

    return (
        <>
            <CommentInputUI
            placeholder={placeholder}/>
        </>
    )
}