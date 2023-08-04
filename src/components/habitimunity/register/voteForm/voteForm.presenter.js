import { forwardRef } from 'react'
// import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './votingInputs.styles'
import Inputs from './votingInputs/inputs/Inputs.container';
import VotingInputs from './votingInputs/votingInputs.container';
import { VotingInputWrap, VotingInputBox, DeleteIcon, GroupIcon } from './voteForm.styles';
import styled from '@emotion/styled';



// -----------

const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.8);
`


const VoteFormPopUpWrap = styled.div`
    width: 580px;
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    border-radius: 24px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* box-shadow: 3px 3px 3px 3px black; */

    position: absolute;
    /* top: calc(50vh - (240px / 2)); */
    top : 10px;
    left: calc(50vw - (580px / 2));
    `

const PopupTitleWrap = styled.div`
    color: var(--color-black1);
    font-family: 'Pretendard-Bold'; 
    font-size: 20px;
    line-height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  

`

const CloseIcon = styled.div`
    -webkit-mask-size: 32px 32px;
    -webkit-mask-image: url(/image/icon/icon-close-line.svg);
    -webkit-mask-repeat: no-repeat;
    background-color: var(--color-black1);
    width: 32px;
    height: 32px;

    cursor: pointer;
`

const Divider = styled.div`

height: 16px;
border-top: 1px solid var(--color-black7);
`


const VoteTitleWrap = styled.div`
    padding-bottom: 16px;
`

const AddItemBtn = styled.div`
    width : 532px;
    height: 48px;
    border: 1px solid var(--color-black2);
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    /* font */
    font-family: 'Pretendard-Medium'; 
    font-size: 16px;
    line-height: 24px;


    > div{
        display: inline-flex;
        align-items: center;
        gap:8px;
        color: var(--color-black2)
        
    }
     > div::before{
        content: '';
        -webkit-mask-size: 10px 10px;
        -webkit-mask-image: url(/image/icon/icon-add-thin.svg);
        -webkit-mask-repeat: no-repeat;
        background-color: var(--color-black1);
        width: 10px;
        height: 10px;
        
    } 
 
`

const VotingOptionsWrap = styled.div`
background-color: blue;
`


const RegVoteBtn = styled.div`
background-color: yellow;
`

export default function VoteFormUI(props) {

    return (

        <>
            <PopupBackground>
                <VoteFormPopUpWrap>
                    <PopupTitleWrap>
                        <div>
                            투표
                        </div>
                        <CloseIcon />

                    </PopupTitleWrap>

                    <Divider />


                    <VoteTitleWrap>
                        <Inputs
                            placeholder={props.titlePlaceholder}
                            name={"title"}
                            width={`532px`}
                        />
                    </VoteTitleWrap>


                    {Object.entries(props.votingItems).map(([key, value],index) =>
                        <VotingInputs
                            // 드래그
                            // draggable
                            // onDragStart={(e)=>props.onDragStart(e,index)}
                            // onDragEnter={(e)=>props.onDragEnter(e,index)}
                            // onDragEnd={props.onDragEnd}
                            // PROPS
                            key={key}
                            placeholder={props.votingInputsPlaceHolder}
                            name={value.name}
                            value={value.value}
                        />


                    )}


                    <AddItemBtn
                        onClick={props.addVotingItem}>
                        <div>항목 추가</div></AddItemBtn>

                    <VotingOptionsWrap>
                        <div>종료시간</div>
                        <div>복수선택</div>
                    </VotingOptionsWrap>


                    <RegVoteBtn>확인</RegVoteBtn>

                </VoteFormPopUpWrap>
            </PopupBackground>

        </>
    )
}
// })
// export default InputUI