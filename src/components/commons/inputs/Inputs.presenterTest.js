import headerStyle from '../../../../styles/header.module.css'
// ../../../../../styles/header.module.css
import inputStyles from '../../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, MainLogo, HeaderMenuBox, HeaderMypageBox, HeaderMenu } from './Inputs.styles'
import { useState } from "react"



// -----------
import TodoBoard from '../test1/TodoBoard';


// -----------

export default function InputUI(props) {

    const [inputValue, setInputvalue] = useState('')
    const [todoList, setTodoList] = useState([])
    const addItem = () => {
        console.log("inputValue값은?", inputValue)
        setTodoList([...todoList, inputValue])
        console.log("todoList값은??", todoList)
    }


    return (
        // html 부분을 여기에 담아라
        <>
            <InputWrap>
                <InputBox>
                    <span className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} ` }></span>
                    <span className={`icon-m icon-error-colored ${inputStyles.input_icon_error_colored}`}></span>
                    <span className={`icon-m icon-check-colored ${inputStyles.input_icon_check_colored}`}></span>
                    <Input onChange={props.InputChange} type="text" className={'input-default body3-medium ${props.aaa}'} placeholder="입력중일 때" />
                </InputBox>
                <InputMessage id="name" className={'caption1-regular color-error'}>{props.Message}</InputMessage>
                <InputMessage id="name" className={'caption1-regular color-success'}>{props.Message}</InputMessage>
                <button onClick={addItem}>추가</button>
            </InputWrap>
            <div>
                {/* <span className="icon-m icon-close-circle-colored"></span> */}
                <Input type="text" value={inputValue} className="input-default body3-medium color-black2" placeholder="테스트용 홀더"
                    onChange={(event) => setInputvalue(event.target.value)} />
            </div>

            {/* ===================================================== */}
            <div>
                <TodoBoard 
                todoLists={todoList}/>
            </div>
            {/* ===================================================== */}
        </>
    )

}