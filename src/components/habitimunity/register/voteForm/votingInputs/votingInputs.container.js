import { useState } from 'react';
import VotingInputsUI from './votingInputs.presenter';
import { useRecoilState } from 'recoil';
import { InputValueState } from '../../../../stores';



export default function VotingInputs(props) {

    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [isError, setIsError] = useState(false)
    // const [width, setWidth] = useState(props.width)
    const width = props.width ?  props.width :  '492px';
    const [errorMessage, setErrorMessage] = useState('에러메세지');


    //  value 와 관련
    const [name, setName] = useState(props.name)
    const [inputValue, setInputValue] = useRecoilState(InputValueState)
   




    // console.log(props)




    return (
        <>



            <VotingInputsUI
                placeholder={props.placeholder}
                isError={props.isError}
                width={width}
                errorMessage={props.errorMessage}
                name={props.name}
                value={props.value}
            />



        </>

    )

}









