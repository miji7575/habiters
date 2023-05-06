// import inputStyles from '../../../../styles/input.module.css'
import {
    TextareaBox, TextareaBoxError,
    TextareaDefault, TextareaOn, TextareaError, TextareaNonEditable,
    TextareaExplain
} from './Textareas.styles'
import { useState } from "react"





// -----------

export default function TextareaUI(props) {

    const [textareaValue, setTextareaValue] = useState('')
    const [isError,setIsError] = useState(false)


function InputChange(e){
    setTextareaValue(e.target.value)
    if(textareaValue === "오류"){
        setIsError(true)
    }


}







    return (
        // html 부분을 여기에 담아라
        <>

            <TextareaBox
                width={props.width}
                margin={props.margin}
                
            >
                <TextareaDefault name="" id="" cols="30" rows="10" className="body3-regular"
                    height={props.height}
                    placeholder={props.placeholder}
                    value={textareaValue}
                    onChange={InputChange }
                    maxLength={200}
                    isError={isError}
                    >
                    
                </TextareaDefault>
                <TextareaExplain className="caption2-regular ">
                    <span>{props.textareaErrorMessage}</span>
                    <span><span>{textareaValue.length}</span>/200</span>
                </TextareaExplain>
            </TextareaBox>

            


            {/* 
            <InputWrap>

                <InputBox>
                    <span className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}></span>
                    <Input
                        onChange={InputChangeValue}
                        value={inputValue}
                        type="text" className={'input-default body3-medium color-black2'} placeholder={props.placeholder} />
                </InputBox>
                <InputMessage id="name" className={'caption1-regular ${props.MessageColor}'}>{props.Message}</InputMessage>
            </InputWrap> */}



            {/* ===================================================== */}
            {/* <div>{inputValue}</div> */}

            {/* ===================================================== */}
        </>
    )

}