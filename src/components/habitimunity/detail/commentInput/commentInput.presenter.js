import {
    CommentInputWrap,
    CommentInput,
    SubmitButton
} from './commentInput.styles';
export default function CommentInputUI(props) {


    return (
        <>
            <CommentInputWrap>
                <CommentInput placeholder={props.placeholder}/>
                <SubmitButton>등록</SubmitButton>
            </CommentInputWrap>
           
        </>
    )
}