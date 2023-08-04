import { useEffect, useState } from 'react';
import VoteFormUI from './voteForm.presenter';
import { useRecoilState } from 'recoil';
import { InputValueState } from '../../../stores';

// index
//  Vote등록, 조회(투표하기/결과보기), 수정 따로 만들어야함

export default function VoteForm(props) {







    // // ----- prop으로 전달될 수 있는 값
    const titlePlaceholder = props.titlePlaceholder || '투표 제목을 입력해주세요.'
    const votingInputsPlaceHolder = props.votingInputsPlaceHolder || '항목을 입력해주세요.'
    // const [placeholder, setPlaceholder] = useState(props.placeholder)
    // const [isError, setIsError] = useState(false)
    // const [width, setWidth] = useState(props.width)
    // const [errorMessage, setErrorMessage] = useState('에러메세지');


    // //  VoteForm  관련
    // const [name, setName] = useState(props.name)
    // const [inputValue, setInputValue] = useRecoilState(InputValueState)







    // ==============================================================
    // =============================방법 1============================
    // ==============================================================
    const [votingItems, setVotingItems] = useState([])

    useEffect(() => {
        setVotingItems([
            { value: "1", name: "1번input" },
            { value: "2", name: "2번input" },
            { value: "3", name: "3번input" },
            { value: "4", name: "4번input" },
            { value: "5", name: "5번input" },
        ])
    }, [])


    const addVotingItem = () => {


        setVotingItems([
            ...votingItems
            , { value: "6번", name: "6번input" }]
        )
   

    }
    
    // ==============================================================
    // ==============================================================
    // ==============================================================

    // 방법2

    // const votingItems = [
    //     { value: "1", name: "Option1" },
    //     { value: "2", name: "Option2" },
    //     { value: "3", name: "Option3" },
    //     { value: "4", name: "긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글 긴 내용의 글" },
    //     { value: "5", name: "Option5" },
    // ]
 

    


    // const addVotingItem = () => {

    //     votingItems.push( { value: "6번", name: "6번input" } ) 
    //     console.log("dd")

    // }
    
    // ==============================================================
    // ==============================================================
    // ==============================================================


    useEffect(() => {
        // console.log(votingItems)
    })





    // 2023-08-04 박미지 ------- Votint Item 드래그
    // const onDragStart = (e , index) => {
    //     console.log("onDragStart" + index)
    // }

    // const onDragEnter = (e , index) => {
    //     console.log("onDragEnter" + index)
    // }

    // const onDragEnd = (e , index) => {
    //     console.log("onDragEnd" + index)
    // }



    // 2023-07-31 박미지 ------- Votint Item 따로 넣어줄 경우.( 투표 항목 수정 )
    const [inputValue, setInputValue] = useRecoilState(InputValueState)
    useEffect(() => {
        setInputValue({
            ...inputValue // 기존의 input 객체를 복사한 뒤
            , ["1번input"]: "밖에서 값 집어넣기🍀1"
            , ["2번input"]: "밖에서 값 집어넣기🍀2"
            , ["3번input"]: "밖에서 값 집어넣기🍀3"
            , ["4번input"]: "밖에서 값 집어넣기🍀4"
            , ["5번input"]: "밖에서 값 집어넣기🍀5"
        }) // name 키를 가진 값을 value 로 설정        
    }, [])


    return (
        <>


            <VoteFormUI
                titlePlaceholder={titlePlaceholder}
                votingInputsPlaceHolder={votingInputsPlaceHolder}
                // placeholder={props.placeholder}
                // isError={props.isError}
                // width={props.width}
                // errorMessage={props.errorMessage}
                // name={props.name}
                votingItems={votingItems}
                addVotingItem={addVotingItem}
                // DRAG
                onDragStart={onDragStart}
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
            />



        </>

    )

}









