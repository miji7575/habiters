import { forwardRef } from 'react'
// import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './votingInputs.styles'
import Inputs from './inputs/Inputs.container';
import { VotingInputWrap, VotingInputBox, DeleteIcon, GroupIcon } from './votingInputs.styles';



// -----------

// export default  function InputUI(props) {

// const InputUI = forwardRef(function InputUI(props, forwardedRef) {


export default function VotingInputsUI(props) {

    return (

        <>
            <VotingInputWrap
                onClick={(e) => props.getClickedVoteItemIndex(props)}//test!!!!!!!!
            >
                <DeleteIcon
                    onClick={(e) => props.deleteVoteItem(props)}//test!!!!!!!!
                />

                <VotingInputBox>
                    <Inputs
                        placeholder={props.placeholder}
                        isError={props.isError}
                        width={props.width}
                        errorMessage={props.errorMessage}
                        name={props.name}
                        value={props.value} //inputValue 를 따로 넣어줄 때만 사용됨.

                    />
                    <GroupIcon />
                </VotingInputBox>

            </VotingInputWrap>

        </>
    )
}
// })
// export default InputUI