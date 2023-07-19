import { useRecoilState, atom } from 'recoil';
import InputUI from "./Inputs.presenter"
import { useState, useEffect, useCallback, useRef } from "react"
import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'
import { inputDoneState, InputValue } from '../../../components/stores';






export default function Inputs(props) {


    const [inputValues, setInputValues] = useRecoilState(InputValue)
    const [isValueNull, setIsValueNull] = useState(true)
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isError, setisError] = useState(false);




    // --- Error Check (페이지 조건별로 에러State 변경)
    useEffect(() => {
        // console.log(props.isError)
        switch (props.isError) {
           
            case true:
                setisError(true)
                return
            case false:
                setisError(false)
        }

    })



    //   -----  값 삭제하기
    const removeValue = async (e) => {

        setInputValues({
            ...inputValues,
            [props.name]: ''
        });
        setIsValueNull(true)


    }


    // ----- 전달받은 Input값 저장하기.
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputValues({
            ...inputValues // 기존의 input 객체를 복사한 뒤
            , [name]: value
        }) // name 키를 가진 값을 value 로 설정

    }



    // --- 값이 변할 때 마다 확인하여 지울 수 있도록 함.
    const valueNullCheck = () => {
        if (inputValues[props.name] == '') {
            setIsValueNull(true)
        }
        else {
            setIsValueNull(false)
        }
    }

    useEffect(() => {
        valueNullCheck()
    }, [inputValues])



    // --- MouseEvent 감지하여 Input내부 클릭 여부 확인.
    //    <수정>
    const Test = ({ 함수를전달하는키 }) => {

        const ref = useRef(null);


        const 콜백함수 = useCallback(
            (event) => {


                const inside = ref.current.contains(event.target);

                if (event.target.id == "removeBtn") {
                    return
                }
                // else if (inside && ref.current.name == "nickName") {
                else if (inside && ref.current.name !== "email") {
                    setIsOnFocus(true)
                }
                else {
                    setIsOnFocus(false)
                }


            },
            [함수를전달하는키, ref]
        );

        useEffect(() => {

            document.addEventListener("mouseup", 콜백함수);
            return () => document.removeEventListener("mouseup", 콜백함수);
        }, [콜백함수]);

        return ref
    }



    const inputRef = Test({ 함수를전달하는키: () => { console.log('Click!') } });





    // 자동완성 끌려고 만들었는데 안됨..
    // const [autocompleteState, setAutocompleteState ] = useState('new-password')
    // console.log(autocompleteState)
    // const autocompleteOn = () => {

    //     if(props.autocomplete === 'on'){
    //         setAutocompleteState('on')
    //         return
    //     }
    // }
    // ================================================





    // ----------UseEffect

    return (
        <>



            <InputUI
                ref={inputRef}
                isValueNull={isValueNull}
                isOnFocus={isOnFocus}
                isError={isError}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}

                isEditable={props.isEditable}

                onChange={onChange}
                removeValue={removeValue}

                width={props.width}
                maxLength={props.length}


                errorMessage={props.errorMessage}

            />



        </>

    )

}



