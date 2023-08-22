import {
    CommentInputWrap,
    CommentInput,
    SubmitButton
} from './commentInput.styles';
export default function CommentInputUI(props) {


    return (
        <>
            <CommentInputWrap
            isEditingComment={props.isEditingComment}>
                <CommentInput 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                />
                <SubmitButton
                onClick={()=>{props.isEditingComment?props.updateComment():props.postComment()}}>등록</SubmitButton>
            </CommentInputWrap>
           
        </>
    )
}