// import inputStyles from '../../../../styles/input.module.css'
import {
    TextareaBox, TextareaBoxError,
    TextareaDefault, TextareaOn, TextareaError, TextareaNonEditable,
    TextareaExplain
} from './Textareas.styles'
import { useState } from "react"
import { useRecoilState } from 'recoil';
import { TextareaValueState } from '../../../components/stores';
import { useEffect } from 'react';





// -----------

export default function TextareaUI(props) {
    const [isError, setIsError] = useState(false)
    const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)
    const [textareaErrorMessage, setTextareaErrorMessage] = useState("")
    const [textLength, setTextLength] = useState()

    useEffect(() => {
        setTextareaErrorMessage(props.textareaErrorMessage)
    }, [])

    useEffect(() => {
        textLengthCheck()
    }, [textareaInput])



    
    const textLengthCheck = () => {
        if (textareaInput.length < 200) {
            setIsError(false)
            setTextareaErrorMessage("")
        }
        else {
            setIsError(true)
            setTextareaErrorMessage("회고는 200자 이내로 입력해주세요.")
        }
    }


    function InputChange(e) {
        console.log(textareaInput.length)
        setTextareaInput(() => e.target.value)

    }


    return (
        // html 부분을 여기에 담아라
        <>
            {/* 입력 가능 */}
            {!props.todayRetrospectState && <TextareaBox
                width={props.width}
                margin={props.margin}
                isError={isError}
            >
                <TextareaDefault name="" id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}

                    onChange={InputChange}
                    maxLength={200}
                    isError={isError}


                    value={props.textareaInput}
                >

                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{textareaErrorMessage}</span>
                    <span><span>{textareaInput.length}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>}




            {/* 읽기 전용 */}
            {props.todayRetrospectState && <TextareaBox
                width={props.width}
                margin={props.margin}
            >
                <TextareaDefault name="" id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}

                    onChange={InputChange}
                    maxLength={200}
                    isError={isError}
                    disabled
                    todayRetrospectState={props.todayRetrospectState}
                // value={textareaInput}
                >

                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{textareaErrorMessage}</span>
                    <span><span>{textareaInput.length}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>}





        </>
    )

}