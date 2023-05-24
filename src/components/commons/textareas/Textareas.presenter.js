// import inputStyles from '../../../../styles/input.module.css'
import {
    TextareaBox, TextareaBoxError,
    TextareaDefault, TextareaOn, TextareaError, TextareaNonEditable,
    TextareaExplain
} from './Textareas.styles'
import { useState } from "react"
import { useRecoilState } from 'recoil';
import { TextareaValueState } from '../../../components/stores';





// -----------

export default function TextareaUI(props) {

    const [textareaValue, setTextareaValue] = useState('')
    const [isError, setIsError] = useState(false)

    const [textareaInput, setTextareaInput] = useRecoilState(TextareaValueState)
    function InputChange(e) {
        setTextareaInput(e.target.value)
        if (textareaValue === "오류") {
            setIsError(true)
        }


    }







    return (
        // html 부분을 여기에 담아라
        <>
            {/* 입력 가능 */}
            {!props.todayRetrospectState && <TextareaBox
                width={props.width}
                margin={props.margin}
            >
                <TextareaDefault name="" id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}

                    onChange={InputChange}
                    maxLength={200}
                    isError={isError}


                    value={textareaInput}
                >

                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{props.textareaErrorMessage}</span>
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
                    <span>{props.textareaErrorMessage}</span>
                    <span><span>{textareaInput.length}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>}





        </>
    )

}