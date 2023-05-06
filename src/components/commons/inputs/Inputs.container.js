import { useRecoilState, atom } from 'recoil';
import InputUI from "./Inputs.presenter"
import { useState, useEffect, useCallback } from "react"
import inputStyles from '../../../styles/input.module.css'
import { InputWrap, InputBox, Input, InputMessage, ErrorIcon } from './Inputs.styles'
import { newInputValueState } from '../../../commons/stores/Stores';






export default function Inputs(props) {

    


    return (
        <>
            {/* // html 부분을 여기에 담아라 */}

            <InputWrap>

                <InputBox>
                    {!props.isError &&
                        <span
                            className={`icon-m icon-close-circle-colored ${inputStyles.input_icon_close_circle_colored} `}
                            onClick={props.removeValue} />}
                    <Input
                        type="text"
                        className={'input-default body3-medium color-black2'}
                        width={props.width}
                        // isError={props.isError}
                        onChange={props.onChangeHandler}
                        value={props.newInput}
                        placeholder={props.placeholder}

                    />



                    {props.isError &&
                        <ErrorIcon
                            className="icon-m icon-error-colored" />}
                </InputBox>
                <InputMessage id="name" className={'caption1-regular ${props.MessageColor}'}>{props.Message}</InputMessage>
            </InputWrap>



            {/* ===================================================== */}
            {/* <div> {props.newInput}: inputPresenter</div>
            <button>입력버튼</button> */}

            {/* ===================================================== */}

        </>

    )

}



    // const [name, setName] = useState("Mike");
    // function changeName() {
    //     const newName = name === "Mike" ? "Jane" : "Mike"
    //     setName(newName);
    // }

    // const [isOnGoing, setisOnGoing] = useState(false);
    // const [isSuccess, setisSuccess] = useState(false);
    // const [isError, setisError] = useState(false);
    // const [isDone, setisDone] = useState(false);
    // const [isDisabled, setisDisabled] = useState(false);






    // const [message, setMessage] = useState(isError);
    // const [messageColor, setMessageColor] = useState(isError);




    // function ChangeMessageColor() {


    //     if (isError) {

    //         const newMessageColor = messageColor === isError ? "" : "color-error"
    //         const newMessage = isError ? "입력이 잘못되었습니다." : ""

    //         setMessageColor(newMessageColor);
    //         setMessage(newMessage);


    //     }
    // };

    // const [inputValue, setInputvalue] = useState('')
    // const InputChange = (e) => {

    //        setInputvalue(e.target.value)



    //        // props.setNewInputvalue(() =>inputValue)
    //        // -------------

    //        // console.log(inputValue)

    //        // if (inputValue == "오류") {
    //        //     setisError(true)
    //        //     // console.log(isError)
    //        //     ChangeMessageColor();

    //        // }
    //        // if (inputValue != "오류") {
    //        //     setisError(false)
    //        //     // console.log(isError)
    //        //     ChangeMessageColor();
    //        // }


    //    }

    //     const removeValue = () => {
    //        props.setInputvalue("")
    //    }

    // const [inputData, setInputData] = useState('')
    // const [newHabitName, setNewHabitName] = useRecoilState();
    // const data = (e) => {

    //     // setNewHabitName(e.target.value)
    //     // console.log(newHabitName)


    // }

    // const getInputData = () => {
    //     // props.InputChangeHandler(newHabitName)


    // }


    // // useEffect(() => {

    // //     if (props.isDone === true) {
    // //         props.InputChangeHandler(inputData)
    // //         console.log(inputData)
    // //     }



    // // }, [props.isDone])
 

    // const getData = () => {

    // }