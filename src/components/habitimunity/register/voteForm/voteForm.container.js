import { useEffect, useState } from 'react';
import VoteFormUI from './voteForm.presenter';
import { useRecoilState } from 'recoil';
import { InputValueState, SelectBoxValueState } from '../../../stores';

// index
//  Vote등록, 조회(투표하기/결과보기), 수정 따로 만들어야함

export default function VoteForm(props) {







    // // ----- prop으로 전달될 수 있는 값
    const voteTitlePlaceholder = props.voteTitlePlaceholder || '투표 제목을 입력해주세요.'
    const voteInputsPlaceHolder = props.voteInputsPlaceHolder || '항목을 입력해주세요.'
    // const [placeholder, setPlaceholder] = useState(props.placeholder)
    // const [isError, setIsError] = useState(false)
    // const [width, setWidth] = useState(props.width)
    // const [errorMessage, setErrorMessage] = useState('에러메세지');


    // //  VoteForm  관련
    const [isPopUpOn, setIsPopUpOn] = useState(false)



    // VoteForm Data관련
    const [inputValue, setInputValue] = useRecoilState(InputValueState)
    const [selectboxValue, setSelectboxValue] = useRecoilState(SelectBoxValueState)
    const [deadlineExists, setDeadlineExists] = useState(false)
    const [isMultiple, setIsMultiple] = useState(false)


    const [voteTitle,setVotetitle] = useState('')
    const [voteItemValue,setVoteItemValue] = useState([])

   



    // 2023-08-07 박미지 ----- 팝업 닫기
    const closePopUp = () => {
        setIsPopUpOn(!isPopUpOn)
        initVoteForm()

    }


    // ==========  투표항목(VoteItem)  ==========

    // 2023-08-05 박미지 ----- 투표할 항목 추가, 삭제
    const [voteItems, setVoteItems] = useState('')
    const [voteItemIndex, setVoteItemIndex] = useState(4) //index 계속증가
    const [clickedVoteItemIndex, setClickedVoteItemIndex] = useState('') // 압력중인 voteItem의 index
    const [voteItemCount, setVoteItemCount] = useState(4) // voteItem 갯수 


    // 2023-08-05 박미지 ----- 투표할 항목 초기화
    useEffect(() => {
        initVoteForm()
    }, [])

    const initVoteForm = () => {

        setVoteItems({
            0: { value: inputValue["0번input"], name: "0번input" },
            1: { value: inputValue["1번input"], name: "1번input" },
            2: { value: inputValue["2번input"], name: "2번input" },
            3: { value: inputValue["3번input"], name: "3번input" },
        })
        setInputValue('')
        setVoteItemIndex(4)
        setVoteItemCount(4)
    }

    // 2023-08-05 박미지 ----- inputValue가 변경될 때 마다 VotingItems 값을 같이 update하기 위한 함수.
    const VoteItemOnChange = () => {
        // console.log(clickedVoteItemIndex)

        if (clickedVoteItemIndex !== '') {
            setVoteItems((prevState) => ({
                ...prevState,
                [clickedVoteItemIndex]: {
                    value: inputValue[clickedVoteItemIndex + "번input"], name: clickedVoteItemIndex + "번input"
                }
            }))
        }
    }

    useEffect(() => {
        VoteItemOnChange()
    }, [inputValue])




    // 2023-08-05 박미지 ----- 투표항목 추가하기.
    const addVoteItem = () => {

        if (voteItemCount >= 10) {
            return
        } else {
            setVoteItems((prevState) => ({
                ...prevState,
                [voteItemIndex]: {
                    value: inputValue[voteItemIndex + "번input"], name: voteItemIndex + "번input"
                }
            }))
            setVoteItemIndex(() => voteItemIndex + 1)
            setVoteItemCount(() => voteItemCount + 1)
        }
    }


    // 2023-08-05 박미지 ----- 투표항목 삭제하기.
    const deleteVoteItem = (props) => {

        if (voteItemCount <= 2) {
            return
        } else {
            let selectedIndex = props.index
            delete voteItems[selectedIndex];
            setVoteItemCount(() => voteItemCount - 1)
        }
    }


    // 2023-08-05 박미지 ----- 클릭한 투표항목 index 값 끌어올리기
    const getClickedVoteItemIndex = (props) => {
        setClickedVoteItemIndex(props.index)
    }





    // 2023-07-31 박미지 ------- Votint Item 따로 넣어줄 경우.( 투표 항목 수정 )
    // const [inputValue, setInputValue] = useRecoilState(InputValueState)
    // useEffect(() => {
    //     setInputValue({
    //         ...inputValue // 기존의 input 객체를 복사한 뒤
    //         , ["title"]: "밖에서 값 집어넣기🍀제목"
    //         , ["0번input"]: "밖에서 값 집어넣기🍀0"
    //         , ["1번input"]: "밖에서 값 집어넣기🍀1"
    //         , ["2번input"]: "밖에서 값 집어넣기🍀2"
    //         , ["3번input"]: "밖에서 값 집어넣기🍀3"

    //     }) // name 키를 가진 값을 value 로 설정        
    // }, [])



    // 2023-08-05 박미지 ----- Unmount 될 때 RecoilValue 초기화
    // useEffect(() => {

    //     return function cleanup() {
    //         setInputValue('')
    //     }
    // })



    // 2023-08-04 박미지 ------- Votint Item 드래그
    const onDragStart = (e, index) => {
        // console.log("onDragStart" + index)
    }

    const onDragEnter = (e, index) => {
        // console.log("onDragEnter" + index)
    }

    const onDragEnd = (e, index) => {
        // console.log("onDragEnd" + index)
    }



    // ==========  종료시간 ()  ==========

    const deadlineCheckBoxOnClick = () => {
        setDeadlineExists(!deadlineExists)
    }



    // ==========  복수선택 (isMultiple)  ==========


    const isMultipleCheckBoxOnClick = () => {
        setIsMultiple(!isMultiple)
    }







    useEffect(() => {
        // console.log("=========== voteItems ===========")
        // console.log(voteItems)

        // console.log("=========== voteItems ===========")
        // console.log("=========== inputValue ===========")
        // console.log(voteItemCount)
        // console.log("=========== inputValue ===========")
        // console.log("voteItemIndex : " + voteItemIndex)
    })







    return (
        <>


            <VoteFormUI
                isPopUpOn={isPopUpOn}
                closePopUp={closePopUp}

                voteTitlePlaceholder={voteTitlePlaceholder}
                voteInputsPlaceHolder={voteInputsPlaceHolder}
                // placeholder={props.placeholder}
                // isError={props.isError}
                // width={props.width}
                // errorMessage={props.errorMessage}
                // name={props.name}
                voteItems={voteItems}
                addVoteItem={addVoteItem}
                value={voteItems + voteItemIndex}
                voteItemCount={voteItemCount}
                // DRAG
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}


                deadlineCheckBoxOnClick={deadlineCheckBoxOnClick}
                deadlineExists={deadlineExists}
                isMultipleCheckBoxOnClick={isMultipleCheckBoxOnClick}



                deleteVoteItem={deleteVoteItem}
                getClickedVoteItemIndex={getClickedVoteItemIndex}







            />



        </>

    )

}









