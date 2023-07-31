import { useState } from 'react';
import VotingInputsUI from './voteForm.presenter';
import { useRecoilState } from 'recoil';
import { InputValueState } from '../../../stores';

// index
//  Vote등록, 조회(투표하기/결과보기), 수정 따로 만들어야함

export default function VoteForm(props) {






    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [isError, setIsError] = useState(false)
    const [width, setWidth] = useState(props.width)
    const [errorMessage, setErrorMessage] = useState('에러메세지');


    //  VoteForm  관련
    const [name, setName] = useState(props.name)
    const [inputValue, setInputValue] = useRecoilState(InputValueState)










    return (
        <>

            <div>VoteForm</div>

            <VotingInputsUI
                placeholder={props.placeholder}
                isError={props.isError}
                width={props.width}
                errorMessage={props.errorMessage}
                name={props.name}

            />



        </>

    )

}









