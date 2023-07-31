import InputUI from './Inputs.presenter';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { InputValueState } from "../../../../../stores";





export default function Inputs(props) {


    // ----- prop으로 전달될 수 있는 값
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [isError, setIsError] = useState(false)
    const [width, setWidth] = useState(props.width)
    const [errorMessage, setErrorMessage] = useState('에러메세지');


    //  value 와 관련
    const [name, setName] = useState(props.name)



    // const [selectedValue, setSelectedValue] = useState('')
    //  const [isDisabled, setIsDisabled] = useState(false)
    //  const [isFocused, setisFocused] = useState(false)
    // const width = props.width


    // ----- InputComponents에서 사용되는 값
    const [isValueNull, setIsValueNull] = useState(true)
    const [inputValue, setInputValue] = useRecoilState(InputValueState)



    // test용
    useEffect(() => {



    })


    // 초기값 세팅
    useEffect(() => {
        setIsError(props.isError)
    }, [props.isError])


    // 2023-07-31-박미지 ------- 값에 변화가 생기면 Recoil Atom에 저장
    const onChange = (e) => {
        // 우선 e.target 에서 name 과 value 를 추출
        const { value, name } = e.target;
        setInputValue({
            // 기존의 input 객체를 복사한 뒤
            ...inputValue,

            // name 키를 가진 값을 value 로 설정
            [name]: value
        })
    }

    return (
        <>
            <InputUI
                placeholder={placeholder}
                isError={isError}
                width={width}
                errorMessage={errorMessage}
                name={name}
                value={inputValue[name]} //inputValue 를 따로 넣어줄 때만 사용됨.
                onChange={onChange}
            />

        </>

    )

}









