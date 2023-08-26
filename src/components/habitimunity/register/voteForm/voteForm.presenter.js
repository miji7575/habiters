import {
    PopupBackground, VoteFormPopUpWrap, PopupTitleWrap, CloseIcon, Divider,
    VoteTitleWrap, AddItemBtn, VotingOptionsWrap, VotingOption, RegVoteBtn, PopupActivateBtn
} from './voteForm.styles';
import Inputs from './votingInputs/inputs/Inputs.container';
import VotingInputs from './votingInputs/votingInputs.container';
import { CheckBoxDefault } from '../../commons/checkbox/index';
import { SelectBoxDefault, SelectBoxTimePicker } from '../../commons/selectbox/index';

// -----------



export default function VoteFormUI(props) {

    return (

        <>
            <PopupActivateBtn
                onClick={() => props.closePopUp()}>
                <span>투표</span>
            </PopupActivateBtn>



            {props.isPopUpOn && <div>
                <PopupBackground
                    onClick={() => props.closePopUp()} />

                <VoteFormPopUpWrap
                    voteItemCount={props.voteItemCount}>
                    <PopupTitleWrap>
                        <div>
                            투표
                        </div>
                        <CloseIcon
                            onClick={() => props.closePopUp()} />

                    </PopupTitleWrap>

                    <Divider />


                    <VoteTitleWrap>
                        <Inputs
                            placeholder={props.voteTitlePlaceholder}
                            name={"title"}
                            width={`532px`}

                        />
                    </VoteTitleWrap>


                    {Object.entries(props.voteItems).map(([key, value], index) =>
                        <VotingInputs
                            // 드래그
                            // draggable
                            // onDragStart={(e)=>props.onDragStart(e,index)}
                            // onDragEnter={(e)=>props.onDragEnter(e,index)}
                            // onDragEnd={props.onDragEnd}
                            // PROPS
                            key={key}
                            placeholder={props.voteInputsPlaceHolder}
                            name={value.name}
                            value={value.value}






                            deleteVoteItem={props.deleteVoteItem}//test!!!!!!!!
                            getClickedVoteItemIndex={props.getClickedVoteItemIndex}//test!!!!!!!!
                            index={key}
                        />


                    )}


                    <AddItemBtn
                        onClick={props.addVoteItem}>
                        <div>항목 추가</div></AddItemBtn>

                    <VotingOptionsWrap>
                        <VotingOption>
                            <CheckBoxDefault
                                onClickEvent={props.deadlineCheckBoxOnClick}
                                checkBoxValue={"종료시간"} />

                            <SelectBoxTimePicker
                                isDisabled={!props.deadlineExists}
                                name={"deadlineDate"}
                                size={"medium"}
                                width={"190px"} />
                            <SelectBoxTimePicker
                                isDisabled={!props.deadlineExists}
                                name={"deadlineTime"}
                                size={"medium"}
                                width={"190px"} />


                        </VotingOption>

                        <CheckBoxDefault
                            onClickEvent={props.isMultipleCheckBoxOnClick}
                            checkBoxValue={"복수선택"} />
                    </VotingOptionsWrap>


                    <RegVoteBtn>확인</RegVoteBtn>



                </VoteFormPopUpWrap>
            </div>
            }




        </>
    )
}
// })
// export default InputUI