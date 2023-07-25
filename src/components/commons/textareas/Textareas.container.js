import styled from "styled-components";
import TextareaUI from "./Textareas.presenter"
import { useEffect, useState } from "react"
import { useRecoilState } from 'recoil';
import { TextareaValueState } from '../../../components/stores';


export default function Textareas(props) {

    const [isError, setIsError] = useState(false)
    const [textareaValue, setTextareaInput] = useRecoilState(TextareaValueState)
    const [textareaErrorMessage, setTextareaErrorMessage] = useState("")
    const [textLength, setTextLength] = useState("0")

    useEffect(() => {
        // console.log(textareaValue)
    })


    useEffect(() => {
        setTextareaErrorMessage(props.textareaErrorMessage)
    }, [])


    // 230724 textarearValue가 변경될때마다 textLengthCheck 함수를 호출
    useEffect(() => {
        textLengthCheck();
    }, [textareaValue]);


    // 230724 text 길이 체크하는 함수
    const textLengthCheck = () => {

        if (textareaValue[props.name]) {
            const length = textareaValue[props.name].length;
            setTextLength(length);

            if (length <= 200) {
                setIsError(false);
                setTextareaErrorMessage("");
            } else if (props.name === "deleteUser") {
                setIsError(true);
                setTextareaErrorMessage("200자 이내로 입력해주세요.");
            } else {
                setIsError(true);
                setTextareaErrorMessage("회고는 200자 이내로 입력해주세요.");
            }
        } else {
            setTextLength(0);
            setTextareaErrorMessage("");
        }
    }



    // const textLengthCheck = () => {

    //     if (textareaValue[props.name]) {
    //         setTextLength(() => textareaValue[props.name].length)


    //         if (textareaValue[props.name].length <= 200) {
    //             setIsError(false)
    //             setTextareaErrorMessage("")
    //         }
    //         else if (props.name == "deleteUser") {
    //             setIsError(true)
    //             setTextareaErrorMessage("200자 이내로 입력해주세요.")
    //         }
    //         else {

    //             setIsError(true)
    //             setTextareaErrorMessage("회고는 200자 이내로 입력해주세요.")
    //         }

    //     } else {
    //         setTextLength(0);
    //         setTextareaErrorMessage("")

    //     }

    // }

    // 230724 글이 입력될 때 실행되는 함수
    const onChange = (e) => {
        const { value, name } = e.target;
        setTextareaInput({ ...textareaValue, [name]: value });
    }



    // const onChange = (e) => {
    //     const { value, name } = e.target;
    //     setTextareaInput({ ...textareaValue, [name]: value })
    //     textLengthCheck()
    // }


    return (
        <>
            <TextareaUI
                name={props.name}
                value={props.value}
                width={props.width}
                margin={props.margin}
                height={props.height}
                placeholder={props.placeholder}
                onChange={onChange}
                isError={isError}
                textLength={textLength}
                textareaErrorMessage={textareaErrorMessage}
                todayRetrospectState={props.todayRetrospectState} /* 오늘 쓴 글이 있는지 없는지 확인하려고 */
            />
        </>
    )

}


